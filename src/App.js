import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useState } from "react";
import * as THREE from "three";

function App() {
  const [hovered, setHovered] = useState(false);
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Portfolio</h1>
      <h2>Count: {count}</h2>
      <Canvas
        camera={{ position: [0, 0, 5] }}
        onCreated={({ gl }) => {
          gl.shadowMap.enabled = true;
          gl.shadowMap.type = THREE.PCFSoftShadowMap;
        }}
        size={{ width: 800, height: 600 }}
      >
        <ambientLight intensity={1} color="blue" />
        <pointLight position={[10, 10, 10]} />
        <mesh
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          scale={hovered ? [10, 10, 10] : [1, 1, 1]}
          translateX={hovered ? 1 : 0}
          onClick={() => setCount((count) => count + 1)}
          href="https://www.google.com"
          position={[-10, 0, 5]}
        >
          {sessionStorage.setItem("count", count)}
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial
            color={hovered ? "hotpink" : "orange"}
            roughness={0.5}
            metalness={0.5}
            emissive={hovered ? "hotpink" : "orange"}
            emissiveIntensity={0.5}
          />
        </mesh>
        <mesh position={[10, -10, 0]}>
          <planeGeometry args={[100, 100]} />
          <meshStandardMaterial
            color="green"
            roughness={0.5}
            metalness={0.5}
            transparent={true}
            opacity={0.5}
          />
        </mesh>
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;
