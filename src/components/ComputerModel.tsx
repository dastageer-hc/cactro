import { Float } from "@react-three/drei";

const ComputerModel = () => {
  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.3}>
      <group position={[0, 0, 0]}>
        {/* Monitor */}
        <mesh position={[0, 0.5, 0]}>
          <boxGeometry args={[1.2, 0.8, 0.1]} />
          <meshStandardMaterial color='#1e293b' />
        </mesh>

        {/* Monitor Stand */}
        <mesh position={[0, 0.1, 0]}>
          <boxGeometry args={[0.1, 0.2, 0.1]} />
          <meshStandardMaterial color='#374151' />
        </mesh>

        {/* Base */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[0.3, 0.1, 0.3]} />
          <meshStandardMaterial color='#374151' />
        </mesh>

        {/* Screen */}
        <mesh position={[0, 0.5, 0.06]}>
          <planeGeometry args={[1.1, 0.7]} />
          <meshStandardMaterial
            color='#0ea5e9'
            emissive='#0ea5e9'
            emissiveIntensity={0.2}
          />
        </mesh>
      </group>
    </Float>
  );
};

export default ComputerModel;
