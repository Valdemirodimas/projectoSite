'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function Heart3DModel() {
  const heartRef = useRef<THREE.Mesh>(null);

  // Create heart shape
  const heartShape = new THREE.Shape();
  const x = 0, y = 0;
  heartShape.moveTo(x + 0.5, y + 0.5);
  heartShape.bezierCurveTo(x + 0.5, y + 0.5, x + 0.4, y, x, y);
  heartShape.bezierCurveTo(x - 0.6, y, x - 0.6, y + 0.7, x - 0.6, y + 0.7);
  heartShape.bezierCurveTo(x - 0.6, y + 1.1, x - 0.3, y + 1.54, x + 0.5, y + 1.9);
  heartShape.bezierCurveTo(x + 1.2, y + 1.54, x + 1.6, y + 1.1, x + 1.6, y + 0.7);
  heartShape.bezierCurveTo(x + 1.6, y + 0.7, x + 1.6, y, x + 1.0, y);
  heartShape.bezierCurveTo(x + 0.7, y, x + 0.5, y + 0.5, x + 0.5, y + 0.5);

  const extrudeSettings = {
    depth: 0.4,
    bevelEnabled: true,
    bevelSegments: 2,
    steps: 2,
    bevelSize: 0.1,
    bevelThickness: 0.1,
  };

  // Animation
  useFrame((state) => {
    if (heartRef.current) {
      const time = state.clock.getElapsedTime();
      heartRef.current.rotation.y = time * 0.3;
      heartRef.current.scale.setScalar(1 + Math.sin(time * 2) * 0.1);
    }
  });

  return (
    <mesh ref={heartRef} rotation={[Math.PI, 0, 0]}>
      <extrudeGeometry args={[heartShape, extrudeSettings]} />
      <meshStandardMaterial
        color="#ff2e63"
        emissive="#ff2e63"
        emissiveIntensity={0.5}
        metalness={0.3}
        roughness={0.2}
      />
    </mesh>
  );
}

export default function Heart3D() {
  return (
    <section className="relative h-screen flex items-center justify-center">
      <div className="w-full h-full max-w-4xl mx-auto">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#ff2e63" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#f5c16c" />
          <spotLight position={[0, 10, 0]} intensity={1} angle={0.3} penumbra={1} color="#ffffff" />
          
          <Heart3DModel />
          
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Canvas>
      </div>

      {/* Overlay text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gradient mb-4">
            Um Amor em 3D
          </h2>
          <p className="text-white-soft/70 text-lg md:text-xl">
            Real, profundo e infinito
          </p>
        </div>
      </div>
    </section>
  );
}
