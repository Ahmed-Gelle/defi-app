import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls,PerspectiveCamera } from "@react-three/drei";
import GltfModel from "./3DModel";

const ModelViewer = ({ modelPath, scale =0, position = [0, -6, -4] }) => {
  return (
    <PerspectiveCamera>
    <Canvas flat linear>
      <ambientLight intensity={.9} />
      <spotLight position={[60,60,60]} angle={0} penumbra={1} />
      <pointLight position={[60,90,20]} />
      <Suspense fallback={null}>
        <GltfModel modelPath={modelPath} scale={scale} position={position} />
        <OrbitControls enableDamping={false}  autoRotate />
      </Suspense>
    </Canvas>
    </PerspectiveCamera>
  );
};

export default ModelViewer;