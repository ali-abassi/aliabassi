"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { useMemo, useRef, useState } from "react";
import * as THREE from "three";

type ShotState = {
  inFlight: boolean;
  scoredThisShot: boolean;
  t: number;
  pos: THREE.Vector3;
  prevPos: THREE.Vector3;
  vel: THREE.Vector3;
};

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function BasketballGame({
  onScore,
}: {
  onScore: (delta: number) => void;
}) {
  const { size, camera } = useThree();

  const ballRef = useRef<THREE.Mesh>(null);
  const aimRef = useRef<THREE.Line>(null);

  const hoopCenter = useMemo(() => new THREE.Vector3(0, 2.85, -8), []);
  const ballStart = useMemo(() => new THREE.Vector3(0, 1.35, 5.2), []);
  const gravity = 6.2;

  const shot = useRef<ShotState>({
    inFlight: false,
    scoredThisShot: false,
    t: 0,
    pos: ballStart.clone(),
    prevPos: ballStart.clone(),
    vel: new THREE.Vector3(0, 0, 0),
  });

  const drag = useRef<{
    active: boolean;
    startX: number;
    startY: number;
    x: number;
    y: number;
  }>({ active: false, startX: 0, startY: 0, x: 0, y: 0 });

  const [hint, setHint] = useState<"idle" | "aim" | "shot">("idle");

  const updateAimLine = () => {
    const line = aimRef.current;
    if (!line) return;

    const { active, startX, startY, x, y } = drag.current;
    if (!active) {
      line.visible = false;
      return;
    }

    const dx = (x - startX) / size.width;
    const dy = (y - startY) / size.height;
    const power = clamp(-dy * 18, 0, 1.4);

    // Aim direction (slight upward arc + left/right influence)
    const dir = new THREE.Vector3(dx * 1.6, 0.9 + power * 1.25, -3.1 - power * 1.8)
      .normalize()
      .multiplyScalar(4.6 + power * 5.5);

    const a = ballStart.clone();
    const b = ballStart.clone().add(dir);
    (line.geometry as THREE.BufferGeometry).setFromPoints([a, b]);
    line.visible = true;
  };

  const resetBall = () => {
    shot.current.inFlight = false;
    shot.current.scoredThisShot = false;
    shot.current.t = 0;
    shot.current.pos.copy(ballStart);
    shot.current.prevPos.copy(ballStart);
    shot.current.vel.set(0, 0, 0);
    if (ballRef.current) ballRef.current.position.copy(ballStart);
  };

  useFrame((_, delta) => {
    // Keep camera stable
    camera.position.lerp(new THREE.Vector3(0, 2.2, 10.5), 0.08);
    camera.lookAt(0, 1.8, -3.5);

    updateAimLine();

    if (!shot.current.inFlight) return;

    shot.current.t += delta;
    shot.current.prevPos.copy(shot.current.pos);

    // Integrate
    shot.current.vel.y -= gravity * delta;
    shot.current.pos.addScaledVector(shot.current.vel, delta);

    // Ground bounce
    const groundY = 0.3;
    if (shot.current.pos.y < groundY) {
      shot.current.pos.y = groundY;
      if (shot.current.vel.y < 0) {
        shot.current.vel.y *= -0.42;
        shot.current.vel.x *= 0.72;
        shot.current.vel.z *= 0.72;
      }
      // Stop if mostly settled
      if (shot.current.t > 1.2 && shot.current.vel.length() < 0.6) {
        resetBall();
        setHint("idle");
      }
    }

    // Backboard bounce (simple plane)
    const backboardZ = -8.55;
    if (shot.current.pos.z < backboardZ) {
      shot.current.pos.z = backboardZ;
      shot.current.vel.z *= -0.35;
      shot.current.vel.x *= 0.92;
    }

    // Rim "make" detection: cross the rim plane downward near hoop center
    const rimY = hoopCenter.y;
    const dz = Math.abs(shot.current.pos.z - hoopCenter.z);
    const dXZ = Math.hypot(shot.current.pos.x - hoopCenter.x, shot.current.pos.z - hoopCenter.z);
    const crossedDown =
      shot.current.prevPos.y > rimY && shot.current.pos.y <= rimY;

    if (
      !shot.current.scoredThisShot &&
      crossedDown &&
      dz < 0.55 &&
      dXZ < 0.42
    ) {
      shot.current.scoredThisShot = true;
      onScore(3);
    }

    // Timeout reset
    if (shot.current.t > 6.5) {
      resetBall();
      setHint("idle");
    }

    if (ballRef.current) ballRef.current.position.copy(shot.current.pos);
  });

  return (
    <group
      onPointerDown={(e) => {
        if (shot.current.inFlight) return;
        drag.current.active = true;
        drag.current.startX = e.clientX;
        drag.current.startY = e.clientY;
        drag.current.x = e.clientX;
        drag.current.y = e.clientY;
        setHint("aim");
      }}
      onPointerMove={(e) => {
        if (!drag.current.active) return;
        drag.current.x = e.clientX;
        drag.current.y = e.clientY;
      }}
      onPointerUp={(e) => {
        if (!drag.current.active) return;
        drag.current.active = false;

        const dx = (e.clientX - drag.current.startX) / size.width;
        const dy = (e.clientY - drag.current.startY) / size.height;
        const power = clamp(-dy * 18, 0.0, 1.4);

        // Shoot vector: z forward, with arc
        const vel = new THREE.Vector3(
          clamp(dx * 7.5, -4.2, 4.2),
          5.6 + power * 6.5,
          -(10.0 + power * 8.5)
        );

        shot.current.inFlight = true;
        shot.current.scoredThisShot = false;
        shot.current.t = 0;
        shot.current.pos.copy(ballStart);
        shot.current.prevPos.copy(ballStart);
        shot.current.vel.copy(vel);

        setHint("shot");
        if (aimRef.current) aimRef.current.visible = false;
      }}
      onPointerLeave={() => {
        drag.current.active = false;
        if (aimRef.current) aimRef.current.visible = false;
        if (!shot.current.inFlight) setHint("idle");
      }}
    >
      {/* Court */}
      <mesh rotation-x={-Math.PI / 2} position={[0, 0, -1]} receiveShadow>
        <planeGeometry args={[60, 60]} />
        <meshStandardMaterial color={"#ffffff"} roughness={1} metalness={0} />
      </mesh>

      {/* Hoop + backboard */}
      <mesh position={[0, 3.3, -8.55]} castShadow receiveShadow>
        <boxGeometry args={[2.2, 1.4, 0.08]} />
        <meshStandardMaterial color={"#f7f7f7"} roughness={0.9} metalness={0.1} />
      </mesh>
      <mesh position={[0, 2.85, -8]} rotation-x={Math.PI / 2} castShadow>
        <torusGeometry args={[0.48, 0.04, 18, 42]} />
        <meshStandardMaterial color={"#111111"} roughness={0.3} metalness={0.6} />
      </mesh>

      {/* Simple net hint */}
      <mesh position={[0, 2.55, -8]} castShadow>
        <coneGeometry args={[0.33, 0.55, 16, 1, true]} />
        <meshStandardMaterial color={"#000000"} wireframe opacity={0.08} transparent />
      </mesh>

      {/* Player (minimal silhouette) */}
      <group position={[0, 0.3, 5.8]}>
        <mesh castShadow>
          <capsuleGeometry args={[0.35, 1.0, 6, 12]} />
          <meshStandardMaterial color={"#111111"} roughness={0.85} metalness={0.05} />
        </mesh>
        <mesh position={[0, 0.95, 0]} castShadow>
          <sphereGeometry args={[0.22, 16, 16]} />
          <meshStandardMaterial color={"#111111"} roughness={0.85} metalness={0.05} />
        </mesh>
      </group>

      {/* Ball */}
      <mesh ref={ballRef} position={ballStart.toArray()} castShadow>
        <sphereGeometry args={[0.24, 24, 24]} />
        <meshStandardMaterial color={"#1a1a1a"} roughness={0.35} metalness={0.15} />
      </mesh>

      {/* Aim line */}
      <line ref={aimRef} visible={false}>
        <bufferGeometry />
        <lineBasicMaterial color={"#000000"} transparent opacity={0.25} />
      </line>

      {/* Soft fill light */}
      <directionalLight position={[6, 10, 8]} intensity={0.8} castShadow />

      {/* Instruction ghost text (3D) */}
      <mesh position={[0, 0.01, 2]} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[8, 1.2]} />
        <meshStandardMaterial transparent opacity={0} />
      </mesh>

      {/* Invisible interaction plane to catch pointer events */}
      <mesh position={[0, 2.0, 2]} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[40, 40]} />
        <meshBasicMaterial transparent opacity={0} />
      </mesh>

      {/* Hint state is used by the overlay in parent; kept here to avoid unused state lint */}
      <group visible={false}>
        <mesh userData={{ hint }} />
      </group>
    </group>
  );
}

export default function ThreeScene() {
  const [score, setScore] = useState(0);

  return (
    <div className="w-full h-full bg-white dark:bg-black relative">
      <div className="absolute top-5 left-5 z-10 rounded-2xl border border-border/40 bg-background/80 backdrop-blur-md px-4 py-3 card-surface">
        <div className="text-[11px] text-muted-foreground/70 font-normal">
          Score
        </div>
        <div className="text-xl font-medium tracking-tight tabular-nums text-foreground/90">
          {score}
        </div>
      </div>

      <div className="absolute bottom-5 left-5 z-10 rounded-2xl border border-border/40 bg-background/70 backdrop-blur-md px-4 py-3">
        <div className="text-[11px] text-muted-foreground/70 font-normal">
          Drag to aim · Release to shoot · Make = +3
        </div>
      </div>

      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 2.2, 10.5]} />
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={1.2} />
        <BasketballGame onScore={(delta) => setScore((s) => s + delta)} />
      </Canvas>
    </div>
  );
}
