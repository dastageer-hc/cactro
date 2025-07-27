import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";

const AnimatedBackground = () => {
  const backgroundRef = useRef();

  useFrame((state) => {
    if (backgroundRef.current) {
      backgroundRef.current.rotation.y += 0.001;
      backgroundRef.current.rotation.x += 0.0005;
    }
  });

  return (
    <group ref={backgroundRef}>
      {/* Large geometric shapes in background */}
      <Float speed={0.5} rotationIntensity={0.2} floatIntensity={0.3}>
        <mesh position={[-10, 5, -10]}>
          <octahedronGeometry args={[2, 0]} />
          <meshStandardMaterial
            color='#f97316'
            transparent
            opacity={0.1}
            wireframe
          />
        </mesh>
      </Float>

      <Float speed={0.7} rotationIntensity={0.3} floatIntensity={0.4}>
        <mesh position={[10, -5, -10]}>
          <icosahedronGeometry args={[1.5, 0]} />
          <meshStandardMaterial
            color='#fb923c'
            transparent
            opacity={0.1}
            wireframe
          />
        </mesh>
      </Float>

      <Float speed={0.6} rotationIntensity={0.25} floatIntensity={0.35}>
        <mesh position={[0, 8, -15]}>
          <tetrahedronGeometry args={[1.8, 0]} />
          <meshStandardMaterial
            color='#ea580c'
            transparent
            opacity={0.1}
            wireframe
          />
        </mesh>
      </Float>

      {/* Floating rings */}
      <Float speed={1} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh position={[-8, 0, -8]}>
          <torusGeometry args={[1.5, 0.1, 16, 32]} />
          <meshStandardMaterial color='#f97316' transparent opacity={0.2} />
        </mesh>
      </Float>

      <Float speed={1.2} rotationIntensity={0.6} floatIntensity={0.6}>
        <mesh position={[8, 0, -8]}>
          <torusGeometry args={[1.2, 0.08, 16, 32]} />
          <meshStandardMaterial color='#fb923c' transparent opacity={0.2} />
        </mesh>
      </Float>

      {/* Floating cubes */}
      <Float speed={0.8} rotationIntensity={0.4} floatIntensity={0.4}>
        <mesh position={[-5, -3, -12]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial
            color='#ea580c'
            transparent
            opacity={0.15}
            wireframe
          />
        </mesh>
      </Float>

      <Float speed={0.9} rotationIntensity={0.45} floatIntensity={0.45}>
        <mesh position={[5, 3, -12]}>
          <boxGeometry args={[0.8, 0.8, 0.8]} />
          <meshStandardMaterial
            color='#f97316'
            transparent
            opacity={0.15}
            wireframe
          />
        </mesh>
      </Float>
    </group>
  );
};

export default AnimatedBackground;
