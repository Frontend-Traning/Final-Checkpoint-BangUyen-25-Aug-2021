import { Html } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DoubleSide, TextureLoader } from "three";
import { data } from "../../consts/data";
import { setListTexture } from "../../store/actions/textureAction";
import "./style.scss";
const BoxScene = () => {
  const dispatch = useDispatch();
  const actionSetListTexture = setListTexture(data);
  dispatch(actionSetListTexture);
  const [currentId, setCurrentId] = useState(data[0].id);
  const texture = useSelector(
    (state) => state.textureReducer.listTexture[currentId]
  );
  const [disableBtn, setDisableBtn] = useState(false);
  const maps = useLoader(TextureLoader, texture);

  const listId = data.map((value) => value.id);
  const idToUpdate = listId.find((value) => value !== currentId);
  const [px, nx, py, ny, pz, nz] = maps;

  const mesh = useRef();
  // useFrame(() => (mesh.current.rotation.y += 0.001));

  const handleOnClick = () => {
    setDisableBtn(!disableBtn);
    setCurrentId(idToUpdate);
  };
  return (
    <group>
      <mesh ref={mesh}>
        <boxGeometry args={[100, 100, 100]} attach="geometry" />
        <meshStandardMaterial
          map={px}
          side={DoubleSide}
          attachArray="material"
        />
        <meshStandardMaterial
          map={nx}
          side={DoubleSide}
          attachArray="material"
        />
        <meshStandardMaterial
          map={py}
          side={DoubleSide}
          attachArray="material"
        />
        <meshStandardMaterial
          map={ny}
          side={DoubleSide}
          attachArray="material"
        />
        <meshStandardMaterial
          map={pz}
          side={DoubleSide}
          attachArray="material"
        />
        <meshStandardMaterial
          map={nz}
          side={DoubleSide}
          attachArray="material"
        />
        <meshStandardMaterial
          map={nz}
          side={DoubleSide}
          attachArray="material"
        />
      </mesh>
      <mesh>
        <Html>
          <button
            disabled={!disableBtn}
            onClick={handleOnClick}
            className="button"
          >
            Hill scence
          </button>
          <button
            disabled={disableBtn}
            onClick={handleOnClick}
            className="button"
          >
            Lake scence
          </button>
        </Html>
      </mesh>
    </group>
  );
};

export default BoxScene;
