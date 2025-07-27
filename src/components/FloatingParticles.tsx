import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";

const FloatingParticles = () => {
  const particlesRef = useRef();

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.002;
      particlesRef.current.rotation.x += 0.001;
    }
  });

  const particleCount = 50;
  const particles = [];

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      position: [
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
      ],
      color: Math.random() > 0.5 ? "#f97316" : "#fb923c",
      size: Math.random() * 0.1 + 0.05,
    });
  }

  return (
    <group ref={particlesRef}>
      {particles.map((particle, idx) => (
        <Float key={idx} speed={1} rotationIntensity={0.5} floatIntensity={0.5}>
          <mesh position={particle.position}>
            <sphereGeometry args={[particle.size, 8, 8]} />
            <meshStandardMaterial
              color={particle.color}
              transparent
              opacity={0.6}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
};

export default FloatingParticles;
