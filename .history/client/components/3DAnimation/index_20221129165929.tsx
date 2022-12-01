import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls,PerspectiveCamera } from "@react-three/drei";
import GltfModel from "./3DModel";

const ModelViewer = ({ modelPath, scale =0, position = [0, -6, 0] }) => {
  return (
    <Canvas flat linear>
      <ambientLight intensity={.9} />
      <spotLight position={[60,60,60]} angle={250} penumbra={100} />
      <pointLight position={[60,90,20]} />
      <Suspense fallback={null}>
        <GltfModel modelPath={modelPath} scale={scale} position={position} />
        <OrbitControls enableDamping={false}  autoRotate />
      </Suspense>
    </Canvas>
  );
};

export default ModelViewer;