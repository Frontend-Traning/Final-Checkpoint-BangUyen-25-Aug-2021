import { useFrame, useLoader } from '@react-three/fiber';
import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { DoubleSide, TextureLoader } from 'three';
import './style.scss';

const BoxScene = () => {
  const isRotate = useSelector((state) => state.sceneReducer.isRotate);
  const currentId = useSelector((state) => state.sceneReducer.sceneId);
  const texture = useSelector(
    (state) => state.sceneReducer.textures[currentId]
  );
  const maps = useLoader(TextureLoader, texture);

  const mesh = useRef();
  useFrame(() => (mesh.current.rotation.y += isRotate ? 0.001 : 0));

  return (
    <mesh ref={mesh}>
      <boxGeometry args={[100, 100, 100]} attach='geometry' />
      {maps.map((texture, index) => (
        <meshStandardMaterial
          key={index}
          map={texture}
          side={DoubleSide}
          attachArray='material'
        />
      ))}
    </mesh>
  );
};

export default BoxScene;
