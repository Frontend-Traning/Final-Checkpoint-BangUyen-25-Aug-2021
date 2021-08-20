import { Html } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DoubleSide, TextureLoader } from "three";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import {
  setEditSceneTitle,
  setStateTextureReducer,
} from "../../store/actions/textureAction";
import EditPopup from "../editPopup";
import "./style.scss";

const BoxScene = ({ data }) => {
  const [modal, setModal] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [currentId, setCurrentId] = useState(data[0].id);

  const dispatch = useDispatch();
  dispatch(setStateTextureReducer(data));
  const texture = useSelector(
    (state) => state.textureReducer.listTexture[currentId]
  );
  const maps = useLoader(TextureLoader, texture);
  console.log("--------------123123213");

  const sceneTitle = useSelector((state) => {
    console.log(
      "state.textureReducer.listSceneTitle",
      state.textureReducer.listSceneTitle
    );
    return state.textureReducer.listSceneTitle[currentId];
  });
  console.log("----------tittle", sceneTitle);
  useEffect(() => setInputValue(sceneTitle), [sceneTitle]);

  const mesh = useRef();
  // useFrame(() => (mesh.current.rotation.y += 0.001));
  const toggle = () => setModal(!modal);

  const handleOnClick = useCallback((e) => {
    setCurrentId(e.target.getAttribute("sceneid"));
  }, []);
  const handleEditBtn = () => {
    setModal(!modal);
  };
  const handleOnChange = useCallback((e) => setInputValue(e.target.value), []);
  const handleSaveBtn = useCallback(() => {
    console.log("---------------handleSaveBtn-----------------");
    dispatch(setEditSceneTitle({ inputValue, currentId }));
  }, [inputValue, currentId]);
  return (
    <group>
      <mesh ref={mesh}>
        <boxGeometry args={[100, 100, 100]} attach="geometry" />
        {maps.map((texture, index) => (
          <meshStandardMaterial
            key={index}
            map={texture}
            side={DoubleSide}
            attachArray="material"
          />
        ))}
      </mesh>
      <mesh>
        <Html>
          {data.map((scene) => (
            <button
              key={scene.id}
              sceneid={scene.id}
              disabled={scene.id === currentId}
              onClick={handleOnClick}
              className="button"
            >
              {scene.title}
            </button>
          ))}
        </Html>
      </mesh>
      <mesh>
        <Html>
          <div className="title-container">
            <div className="title">{sceneTitle}</div>
            <div className="edit-icon" onClick={handleEditBtn}>
              <FontAwesomeIcon icon={faEdit} />
            </div>
          </div>
        </Html>
      </mesh>
      <mesh>
        {/* <sphereGeometry args={[1.25, 32, 32]} />
        <meshBasicMaterial color="white" /> */}
        <Html position={[0, -2, 0]}>
          {/* <input type="text" value={inputValue} /> */}
          {/* <EditPopup
            modal={modal}
            toggle={toggle}
            title={sceneTitle}
            currentId={currentId}
          /> */}
          <Modal isOpen={modal} toggle={toggle} size="sm">
            <ModalHeader></ModalHeader>
            <ModalBody>
              <div>
                <input
                  type="text"
                  value={inputValue}
                  onChange={handleOnChange}
                />
              </div>
            </ModalBody>
            <ModalFooter>
              <button>Cancel</button>
              <button onClick={handleSaveBtn}>Save</button>
            </ModalFooter>
          </Modal>
        </Html>
      </mesh>
    </group>
  );
};

export default BoxScene;
