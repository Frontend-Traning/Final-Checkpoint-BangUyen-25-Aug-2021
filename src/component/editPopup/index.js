import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, ModalBody, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { setEditSceneTitle } from '../../store/actions/sceneAction';
import { changePopup } from '../../store/actions/popupAction';
import './style.scss';
const EditPopup = () => {
  const sceneTitles = useSelector((state) => state.sceneReducer.sceneTitles);
  const sceneId = useSelector((state) => state.sceneReducer.sceneId);
  const [inputValue, setInputValue] = useState(sceneTitles[sceneId]);

  const modal = useSelector((state) => state.popupReducer.modal);
  const dispatch = useDispatch();
  const handleOnChange = (e) => setInputValue(e.target.value);
  useEffect(() => setInputValue(sceneTitles[sceneId]), [sceneId, sceneTitles]);
  const toggle = useCallback(() => dispatch(changePopup()), [dispatch]);
  const handleSaveBtn = useCallback(() => {
    dispatch(setEditSceneTitle({ inputValue, sceneId }));
    dispatch(changePopup());
  }, [inputValue, sceneId, dispatch]);

  const handleCancelBtn = useCallback(() => {
    dispatch(changePopup());
    setInputValue(sceneTitles[sceneId]);
  }, [dispatch, sceneId, sceneTitles]);
  return (
    <Modal isOpen={modal} toggle={toggle} centered>
      <ModalBody className='py-2 modal-container'>
        <Row className='header'>
          <div className='col-11  fw-bold title'>EDIT SCENE TITLE</div>
          <div className='col-1 d-flex justify-content-end ps-0 exit-btn'>
            <FontAwesomeIcon icon={faTimes} onClick={handleCancelBtn} />
          </div>
        </Row>
        <Row className='ipt-container'>
          <div className='content d-flex align-items-center p-0'>
            <label className='label'>Title:</label>
            <input
              className='ipt'
              type='text'
              value={inputValue}
              onChange={handleOnChange}
            />
          </div>
        </Row>
        <Row className='footer d-flex justify-content-end'>
          <div className='col-8 d-flex justify-content-end'>
            <button className='button btn1' onClick={handleCancelBtn}>
              Cancel
            </button>
            <button className='button btn2' onClick={handleSaveBtn}>
              Save
            </button>
          </div>
        </Row>
      </ModalBody>
    </Modal>
  );
};

export default EditPopup;
