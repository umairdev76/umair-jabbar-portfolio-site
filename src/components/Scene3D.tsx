import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

const MouseTracker = ({ mousePosition }: { mousePosition: { x: number; y: number } }) => {
  const groupRef = useRef<THREE.Group>(null);
  const monitorRef = useRef<THREE.Mesh>(null);
  const baseRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (groupRef.current) {
      // Rotate the entire group based on mouse position
      groupRef.current.rotation.y = mousePosition.x * 0.3;
      groupRef.current.rotation.x = -mousePosition.y * 0.2;
    }
  });

  return (
    <group ref={groupRef} position={[0, -1, 0]}>
      {/* Base Platform */}
      <mesh ref={baseRef} position={[0, -0.5, 0]}>
        <cylinderGeometry args={[2, 2.5, 0.5, 32]} />
        <meshStandardMaterial 
          color="#1a1a1a"
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      
      {/* Monitor Base */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.3, 0.4, 1, 16]} />
        <meshStandardMaterial 
          color="#2a2a2a"
          metalness={0.7}
          roughness={0.3}
        />
      </mesh>
      
      {/* Monitor Stand */}
      <mesh position={[0, 0.8, 0]}>
        <boxGeometry args={[0.1, 0.6, 0.3]} />
        <meshStandardMaterial 
          color="#333"
          metalness={0.6}
          roughness={0.4}
        />
      </mesh>
      
      {/* Monitor Screen */}
      <mesh ref={monitorRef} position={[0, 1.3, 0]} rotation={[0, 0, 0]}>
        <boxGeometry args={[1.6, 1, 0.1]} />
        <meshStandardMaterial 
          color="#ff6b35"
          emissive="#ff4500"
          emissiveIntensity={0.3}
          metalness={0.1}
          roughness={0.1}
        />
      </mesh>
      
      {/* Screen Glow */}
      <mesh position={[0, 1.3, 0.1]}>
        <planeGeometry args={[1.4, 0.8]} />
        <meshBasicMaterial 
          color="#ffaa00"
          transparent
          opacity={0.8}
        />
      </mesh>
      
      {/* Decorative Elements */}
      <mesh position={[-0.8, 1.5, 0.2]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial 
          color="#ff0040"
          emissive="#ff0040"
          emissiveIntensity={0.5}
        />
      </mesh>
      
      <mesh position={[0.8, 1.5, 0.2]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial 
          color="#ffff00"
          emissive="#ffff00"
          emissiveIntensity={0.5}
        />
      </mesh>
    </group>
  );
};

const Scene3D = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="w-full h-[400px] lg:h-[500px]">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} />
        
        {/* Lighting */}
        <ambientLight intensity={0.3} />
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={1}
          color="#ffffff"
        />
        <directionalLight 
          position={[-10, -10, -5]} 
          intensity={0.3}
          color="#4f46e5"
        />
        <pointLight 
          position={[0, 2, 4]} 
          intensity={0.5}
          color="#ff6b35"
        />
        
        <MouseTracker mousePosition={mousePosition} />
        
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

export default Scene3D;