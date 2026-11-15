
'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars, Torus } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import * as THREE from 'three';

function Planet() {
  const planet = useRef<THREE.Mesh>(null);
  const rings = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (planet.current) {
      planet.current.rotation.y += delta * 0.25;
      planet.current.rotation.x += delta * 0.06;
    }

    if (rings.current) {
      rings.current.rotation.y += delta * 0.08;
    }
  });

  return (
    <group>
      <Float speed={1.5} floatIntensity={0.25}>
        <mesh ref={planet}>
          <sphereGeometry args={[1, 96, 96]} />
          <meshStandardMaterial
            color="#7135d4"
            emissive="#351064"
            emissiveIntensity={0.65}
            roughness={0.3}
            metalness={0.35}
          />
        </mesh>

        <mesh scale={1.12}>
          <sphereGeometry args={[1, 64, 64]} />
          <meshBasicMaterial
            color="#a855f7"
            transparent
            opacity={0.13}
            side={THREE.BackSide}
          />
        </mesh>

        <group ref={rings}>
          <Torus args={[1.48, 0.025, 16, 160]} rotation={[1.1, 0.2, -0.4]}>
            <meshBasicMaterial color="#d8b4fe" />
          </Torus>

          <Torus args={[1.72, 0.012, 12, 160]} rotation={[0.65, -0.5, 0.7]}>
            <meshBasicMaterial
              color="#e879f9"
              transparent
              opacity={0.8}
            />
          </Torus>
        </group>

        <mesh position={[1.4, 0.65, 0.3]}>
          <sphereGeometry args={[0.12, 32, 32]} />
          <meshBasicMaterial color="#f0abfc" />
        </mesh>
      </Float>
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={1.5} />
      <pointLight position={[3, 3, 4]} intensity={45} color="#c4b5fd" />
      <pointLight position={[-3, -2, -2]} intensity={25} color="#d946ef" />
      <Stars radius={50} depth={40} count={250} factor={3} fade speed={0.5} />
      <Planet />
    </>
  );
}

export default function CosmicScene() {
  return (
    <div
      className="h-full w-full"
      style={{ minHeight: 360, minWidth: 360 }}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true }}
        style={{ width: '100%', height: '100%' }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
