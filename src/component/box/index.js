import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

const Box = (props) => {
  const mesh = useRef();
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 2 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={hover ? "hotpink" : "orange"} />
    </mesh>
  );
};

export default Box;
