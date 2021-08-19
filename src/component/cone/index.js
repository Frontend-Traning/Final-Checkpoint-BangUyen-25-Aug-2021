import { useFrame, useLoader } from "@react-three/fiber";
import React, { useRef, useState } from "react";
import { TextureLoader } from "three";

const Cone = (props) => {
  const mesh = useRef();
  const [active, setActive] = useState(false);
  useFrame(() => (mesh.current.rotation.x += 0.01));
  const texture = useLoader(
    TextureLoader,
    "nick-nice-X438cCeX2-E-unsplash.jpg"
  );
  return (
    <mesh
      {...props}
      ref={mesh}
      onClick={() => setActive(!active)}
      scale={active ? 2 : 1}
    >
      <coneGeometry args={[1, 2, 32, 2]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

Cone.propTypes = {};

export default Cone;
