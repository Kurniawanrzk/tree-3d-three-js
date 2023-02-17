import React, { forwardRef, useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import { DataTexture, RedFormat } from "three";
import { vertaxShader, fragmentShader } from "./SimpleShader";

export const Trees = forwardRef((props, ref) => {
  const { nodes } = useGLTF("/trees.glb");
  const toneMap = useMemo(() => {
    const format = RedFormat;
    
    const color = new Uint8Array(4);
    for (let i = 0; i <= color.length; i++) {
      color[i] = (i / color.length) * 256;
    }
    const gradientMap = new DataTexture(color, color.length, 1, format);
    gradientMap.needsUpdate = true;
    return gradientMap;
  });

  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Foliage.geometry}
        position={[0.10, -1.80, -0.68]}
      >
        <meshToonMaterial gradientMap={toneMap} color={"#33594e"} />
      </mesh>
    </group>
  );
});

useGLTF.preload("/trees.glb");
