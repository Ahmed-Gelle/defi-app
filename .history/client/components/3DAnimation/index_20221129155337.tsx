import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import GltfModel from "./3DModel";

const ModelViewer = ({ modelPath, scale =4, position = [50,50,50] }) => {
  return (
    <Canvas>
      <ambientLight intensity={.9} />
      <spotLight position={[0,0,0]} angle={0} penumbra={1} />
      <pointLight position={[50,50,50]} />
      <Suspense fallback={null}>
        <GltfModel modelPath={modelPath} scale={scale} position={position} />
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
};

export default ModelViewer;