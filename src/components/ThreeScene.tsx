"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Mesh } from "three";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

function Box(props: any) {
  const meshRef = useRef<Mesh>(null!);
  const [hovered, setHover] = useState(false);

  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.5;
    meshRef.current.rotation.y += delta * 0.2;
  });

  return (
    <mesh
      {...props}
      ref={meshRef}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial 
        color={hovered ? "#000000" : "#262626"} 
        wireframe={!hovered}
      />
    </mesh>
  );
}

export default function ThreeScene() {
  return (
    <div className="w-full h-full bg-white dark:bg-black">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 6]} />
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} intensity={2} />
        <Box position={[0, 0, 0]} />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}
