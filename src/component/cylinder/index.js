import { useFrame, useLoader } from "@react-three/fiber";
import React, { useRef, useState } from "react";
import { TextureLoader } from "three";

const Cylinder = (props) => {
  const mesh = useRef();
  const [active, setActive] = useState(false);
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
  const texture = useLoader(
    TextureLoader,
    "assets/texture/patrick-tomasso-QMDap1TAu0g-unsplash.jpg"
  );
  return (
    <mesh
      ref={mesh}
      {...props}
      scale={active ? 2 : 1}
      onClick={() => {
        setActive(true);
      }}
    >
      <cylinderGeometry args={[1, 1, 1, 32]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

export default Cylinder;
