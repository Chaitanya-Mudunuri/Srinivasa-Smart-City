"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function FloatingCubes() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central glowing hub */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[2.5, 2.5, 2.5]} />
          <meshStandardMaterial
            color="#f59e0b"
            roughness={0.2}
            metalness={0.8}
            emissive="#d97706"
            emissiveIntensity={0.4}
            wireframe={false}
          />
        </mesh>
      </Float>

      {/* Orbiting plot blocks representing smart city master plan */}
      <Float speed={3} rotationIntensity={1} floatIntensity={2}>
        <mesh position={[4, 1, -2]}>
          <boxGeometry args={[1.5, 1.2, 1.8]} />
          <meshStandardMaterial color="#38bdf8" roughness={0.3} metalness={0.6} />
        </mesh>
      </Float>

      <Float speed={2.5} rotationIntensity={1.2} floatIntensity={1.5}>
        <mesh position={[-4, -1.5, 1]}>
          <boxGeometry args={[1.8, 1, 1.5]} />
          <meshStandardMaterial color="#10b981" roughness={0.4} metalness={0.5} />
        </mesh>
      </Float>

      <Float speed={3.5} rotationIntensity={0.8} floatIntensity={2.5}>
        <mesh position={[3, -2, 2]}>
          <boxGeometry args={[1.2, 1.5, 1.2]} />
          <meshStandardMaterial color="#ec4899" roughness={0.3} metalness={0.7} />
        </mesh>
      </Float>

      <Float speed={2.2} rotationIntensity={1.5} floatIntensity={1.8}>
        <mesh position={[-3, 2, -1]}>
          <boxGeometry args={[2, 0.8, 2]} />
          <meshStandardMaterial color="#8b5cf6" roughness={0.3} metalness={0.8} />
        </mesh>
      </Float>
    </group>
  );
}

export default function HeroScene3D() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
      <Canvas camera={{ position: [0, 2, 8], fov: 60 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 20, 15]} intensity={1.5} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#38bdf8" />
        <FloatingCubes />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}
