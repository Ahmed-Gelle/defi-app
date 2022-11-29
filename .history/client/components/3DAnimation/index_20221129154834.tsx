import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import GltfModel from "./3DModel";

const ModelViewer = ({ modelPath, scale = 40, position = [0, 0, 0] }) => {
  return (
    <Canvas>
      <ambientLight intensity={.9} />
      <spotLight position={[0,0,0]} angle={0} penumbra={1} />
      <pointLight position={[0, -10, -10]} />
      <Suspense fallback={null}>
        <GltfModel modelPath={modelPath} scale={scale} position={position} />
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
};

export default ModelViewer;