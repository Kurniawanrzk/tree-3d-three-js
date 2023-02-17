import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Trees } from "./Trees";

const Scene = () => {
    const refTrees = useRef(null)
    useFrame(() => {
        const { current:group } = refTrees 
        if(group) {
            group.rotation.x = group.rotation.y += 0.01
        }
    })
  return (
    <>
      <ambientLight intensity={0.1} />
      <directionalLight
        color={'white'}
        position={[10, 10, 10]}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <Trees ref={refTrees} />
    </>
  );
};

export default Scene;
