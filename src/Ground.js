import { Color } from "three";

export function Ground() {
  return (
    <mesh
      castShadow
      receiveShadow
      position={[0, -1.05, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
    >
      <planeGeometry args={[20, 10, 1]}  />
        <meshStandardMaterial color={new Color('#684132').convertLinearToSRGB()} />
    </mesh>
  );
}
