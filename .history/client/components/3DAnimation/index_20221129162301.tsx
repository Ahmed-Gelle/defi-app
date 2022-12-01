import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import GltfModel from "./3DModel";

const ModelViewer = ({ modelPath, scale =0, position = [0, -3.4, -2] }) => {
  return (
    <Canvas flat linear>
      <ambientLight intensity={.9} />
      <spotLight position={[0,0,60]} angle={0} penumbra={1} />
      <pointLight position={[0, 0,0]} />
      <Suspense fallback={null}>
        <GltfModel modelPath={modelPath} scale={scale} position={position} />
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
};

export default ModelViewer;