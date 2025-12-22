"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
  MeshTransmissionMaterial,
} from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function KineticSculpture() {
  const group = useRef<THREE.Group>(null);
  const pointer = useRef({ x: 0, y: 0 });

  const metal = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#0b0b0b",
        roughness: 0.2,
        metalness: 0.9,
      }),
    []
  );

  const particles = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const n = 420;
    const positions = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      const r = 3.4 * Math.pow(Math.random(), 0.55);
      const theta = Math.random() * Math.PI * 2;
      const y = (Math.random() - 0.5) * 2.2;
      positions[i * 3 + 0] = Math.cos(theta) * r;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = Math.sin(theta) * r - 0.6;
    }
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geo;
  }, []);

  useFrame((state, dt) => {
    const g = group.current;
    if (!g) return;
    const t = state.clock.getElapsedTime();

    const targetY = pointer.current.x * 0.28;
    const targetX = -pointer.current.y * 0.18;
    g.rotation.y = THREE.MathUtils.lerp(g.rotation.y, targetY + t * 0.12, 0.06);
    g.rotation.x = THREE.MathUtils.lerp(g.rotation.x, targetX, 0.06);
    g.position.y = Math.sin(t * 0.7) * 0.06;

    // subtle breathing scale
    const s = 1 + Math.sin(t * 0.5) * 0.01;
    g.scale.set(s, s, s);
  });

  return (
    <group
      ref={group}
      onPointerMove={(e) => {
        pointer.current.x = (e.uv?.x ?? 0.5) * 2 - 1;
        pointer.current.y = (e.uv?.y ?? 0.5) * 2 - 1;
      }}
    >
      {/* Soft particle field */}
      <points geometry={particles}>
        <pointsMaterial
          color={"#000000"}
          size={0.02}
          sizeAttenuation
          opacity={0.12}
          transparent
          depthWrite={false}
        />
      </points>

      {/* Central glass form */}
      <mesh castShadow receiveShadow>
        <torusKnotGeometry args={[0.85, 0.26, 260, 18]} />
        <MeshTransmissionMaterial
          thickness={0.65}
          roughness={0.08}
          transmission={1}
          ior={1.25}
          chromaticAberration={0.03}
          anisotropy={0.15}
          distortion={0.2}
          distortionScale={0.15}
          temporalDistortion={0.12}
        />
      </mesh>

      {/* Metallic orbit ring */}
      <mesh rotation-x={Math.PI / 2} position={[0, -0.1, 0]} material={metal}>
        <torusGeometry args={[1.75, 0.04, 12, 220]} />
      </mesh>

      {/* Accent satellites */}
      {new Array(9).fill(0).map((_, i) => (
        <mesh
          key={i}
          position={[
            Math.cos((i / 9) * Math.PI * 2) * 1.85,
            Math.sin((i / 9) * Math.PI * 2) * 0.45,
            Math.sin((i / 9) * Math.PI * 2) * 0.6,
          ]}
          material={metal}
        >
          <sphereGeometry args={[0.08, 24, 24]} />
        </mesh>
      ))}
    </group>
  );
}

export default function ThreeScene() {
  return (
    <div className="w-full h-full bg-white dark:bg-black">
      <Canvas
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        shadows
      >
        <color attach="background" args={["#ffffff"]} />
        <fog attach="fog" args={["#ffffff", 8, 16]} />

        <PerspectiveCamera makeDefault position={[0, 0.6, 6.2]} fov={42} />

        <ambientLight intensity={0.7} />
        <directionalLight position={[6, 8, 6]} intensity={1.1} castShadow />
        <pointLight position={[-6, 4, 4]} intensity={0.6} />

        <KineticSculpture />

        <mesh rotation-x={-Math.PI / 2} position={[0, -1.65, 0]} receiveShadow>
          <planeGeometry args={[40, 40]} />
          <shadowMaterial opacity={0.16} />
        </mesh>

        <Environment preset="warehouse" />
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          rotateSpeed={0.6}
          autoRotate
          autoRotateSpeed={0.35}
        />
      </Canvas>
    </div>
  );
}
