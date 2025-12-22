"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrthographicCamera, useTexture } from "@react-three/drei";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

type Pipe = {
  x: number;
  gapY: number;
  scored: boolean;
};

function rand(min: number, max: number) {
  return min + Math.random() * (max - min);
}

function FlappyGame({
  onScore,
  onGameOver,
  running,
}: {
  onScore: (delta: number) => void;
  onGameOver: () => void;
  running: boolean;
}) {
  const playerX = -3.6;
  const worldTop = 3.4;
  const worldBottom = -3.4;
  const gapSize = 2.15;
  const pipeWidth = 1.1;
  const speed = 3.1;
  const gravity = 9.8;
  const flapVel = 5.2;

  const tex = useTexture("/sprites/ali-face.svg");
  tex.colorSpace = THREE.SRGBColorSpace;

  const player = useRef({ y: 0, vy: 0 });
  const playerMesh = useRef<THREE.Mesh>(null);

  const pipes = useRef<Pipe[]>(
    Array.from({ length: 3 }).map((_, i) => ({
      x: 4.5 + i * 4.2,
      gapY: rand(-0.8, 0.8),
      scored: false,
    }))
  );

  const pipeTopRefs = useRef<Array<THREE.Mesh | null>>([]);
  const pipeBottomRefs = useRef<Array<THREE.Mesh | null>>([]);

  const flap = () => {
    if (!running) return;
    player.current.vy = flapVel;
  };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Space") {
        e.preventDefault();
        flap();
      }
    };
    window.addEventListener("keydown", onKeyDown, { passive: false });
    return () => window.removeEventListener("keydown", onKeyDown as any);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [running]);

  useEffect(() => {
    if (!running) return;
    // reset when starting
    player.current.y = 0;
    player.current.vy = 0;
    pipes.current = pipes.current.map((p, i) => ({
      x: 4.5 + i * 4.2,
      gapY: rand(-0.8, 0.8),
      scored: false,
    }));
  }, [running]);

  useFrame((_, dt) => {
    const delta = Math.min(dt, 0.033);
    if (!running) return;

    // player integrate
    player.current.vy -= gravity * delta;
    player.current.y += player.current.vy * delta;

    // clamp-ish: hit top/bottom = game over
    if (player.current.y > worldTop - 0.35 || player.current.y < worldBottom + 0.35) {
      onGameOver();
      return;
    }

    // move pipes
    for (const p of pipes.current) {
      p.x -= speed * delta;
      if (p.x < -6.5) {
        p.x = 7.5;
        p.gapY = rand(-0.9, 0.9);
        p.scored = false;
      }
      if (!p.scored && p.x + pipeWidth / 2 < playerX) {
        p.scored = true;
        onScore(1);
      }
    }

    // collisions (AABB)
    const px = playerX;
    const py = player.current.y;
    const pw = 0.9;
    const ph = 0.9;

    for (const p of pipes.current) {
      const gapTop = p.gapY + gapSize / 2;
      const gapBottom = p.gapY - gapSize / 2;

      // only check if near pipe x
      if (Math.abs(p.x - px) > (pipeWidth / 2 + pw / 2)) continue;

      // if player overlaps in x, check y outside gap
      const inGap = py + ph / 2 < gapTop && py - ph / 2 > gapBottom;
      if (!inGap) {
        onGameOver();
        return;
      }
    }

    if (playerMesh.current) {
      playerMesh.current.position.set(playerX, player.current.y, 0);
      playerMesh.current.rotation.z = THREE.MathUtils.lerp(
        playerMesh.current.rotation.z,
        THREE.MathUtils.degToRad(clamp(player.current.vy * 7, -28, 28)),
        0.12
      );
    }

    // update pipe meshes
    pipes.current.forEach((p, i) => {
      const topH = worldTop - (p.gapY + gapSize / 2);
      const botH = (p.gapY - gapSize / 2) - worldBottom;
      const topY = p.gapY + gapSize / 2 + topH / 2;
      const botY = worldBottom + botH / 2;

      const topRef = pipeTopRefs.current[i];
      const botRef = pipeBottomRefs.current[i];
      if (topRef) {
        topRef.position.set(p.x, topY, 0);
        topRef.scale.set(pipeWidth, topH, 1);
      }
      if (botRef) {
        botRef.position.set(p.x, botY, 0);
        botRef.scale.set(pipeWidth, botH, 1);
      }
    });
  });

  const pipeMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#0b0b0b",
        roughness: 0.65,
        metalness: 0.12,
      }),
    []
  );

  const pipeCapMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#111111",
        roughness: 0.55,
        metalness: 0.18,
      }),
    []
  );

  return (
    <group
      onPointerDown={() => flap()}
      onPointerUp={() => undefined}
      onPointerMissed={() => flap()}
    >
      {/* background */}
      <mesh position={[0, 0, -1]}>
        <planeGeometry args={[40, 20]} />
        <meshStandardMaterial color={"#ffffff"} roughness={1} metalness={0} />
      </mesh>

      {/* ground line */}
      <mesh position={[0, worldBottom - 0.05, 0]}>
        <planeGeometry args={[40, 0.12]} />
        <meshStandardMaterial color={"#0b0b0b"} opacity={0.08} transparent />
      </mesh>

      {/* pipes */}
      {pipes.current.map((_, i) => (
        <group key={`pipe-${i}`}>
          <mesh
            ref={(el) => {
              pipeTopRefs.current[i] = el;
            }}
            scale={[pipeWidth, 2, 1]}
            material={pipeMat}
          >
            <boxGeometry args={[1, 1, 0.4]} />
          </mesh>
          <mesh
            ref={(el) => {
              pipeBottomRefs.current[i] = el;
            }}
            scale={[pipeWidth, 2, 1]}
            material={pipeMat}
          >
            <boxGeometry args={[1, 1, 0.4]} />
          </mesh>

          {/* caps (subtle) */}
          <mesh position={[0, 0, 0.24]} material={pipeCapMat} visible={false}>
            <boxGeometry args={[1.18, 0.16, 0.2]} />
          </mesh>
        </group>
      ))}

      {/* player */}
      <mesh ref={playerMesh} position={[playerX, 0, 0.4]}>
        <planeGeometry args={[0.9, 0.9]} />
        <meshBasicMaterial map={tex} transparent />
      </mesh>

      {/* light */}
      <ambientLight intensity={1.0} />
      <directionalLight position={[5, 8, 6]} intensity={0.7} />
    </group>
  );
}

export default function ThreeScene() {
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);
  const [running, setRunning] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const start = () => {
    setScore(0);
    setGameOver(false);
    setRunning(true);
  };

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

      <div className="absolute top-5 right-5 z-10 rounded-2xl border border-border/40 bg-background/70 backdrop-blur-md px-4 py-3">
        <div className="text-[11px] text-muted-foreground/70 font-normal">
          Best
        </div>
        <div className="text-xl font-medium tracking-tight tabular-nums text-foreground/90">
          {best}
        </div>
      </div>

      <div className="absolute bottom-5 left-5 z-10 rounded-2xl border border-border/40 bg-background/70 backdrop-blur-md px-4 py-3">
        <div className="text-[11px] text-muted-foreground/70 font-normal">
          Click or Space to flap
        </div>
      </div>

      {!running ? (
        <button
          type="button"
          onClick={start}
          className="absolute inset-0 z-10 flex items-center justify-center bg-transparent"
          aria-label="Start game"
        >
          <div className="rounded-[2.5rem] border border-border/40 bg-background/75 backdrop-blur-md px-8 py-6 card-surface text-center space-y-2">
            <div className="text-xl font-medium tracking-tight text-foreground/90">
              Ali Flappy
            </div>
            <div className="text-sm text-muted-foreground/70 font-normal">
              Click to start · Space to flap
            </div>
          </div>
        </button>
      ) : null}

      {gameOver ? (
        <button
          type="button"
          onClick={start}
          className="absolute inset-0 z-10 flex items-center justify-center bg-transparent"
          aria-label="Restart game"
        >
          <div className="rounded-[2.5rem] border border-border/40 bg-background/75 backdrop-blur-md px-8 py-6 card-surface text-center space-y-2">
            <div className="text-xl font-medium tracking-tight text-foreground/90">
              Game over
            </div>
            <div className="text-sm text-muted-foreground/70 font-normal">
              Click to restart
            </div>
          </div>
        </button>
      ) : null}

      <Canvas>
        <OrthographicCamera makeDefault position={[0, 0, 10]} zoom={70} />
        <FlappyGame
          running={running && !gameOver}
          onScore={(delta) => setScore((s) => s + delta)}
          onGameOver={() => {
            setGameOver(true);
            setRunning(false);
            setBest((b) => Math.max(b, score));
          }}
        />
      </Canvas>
    </div>
  );
}
