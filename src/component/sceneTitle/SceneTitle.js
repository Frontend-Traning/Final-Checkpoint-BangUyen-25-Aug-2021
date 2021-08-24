import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { changePopup } from '../../store/actions/popupAction';
import './style.scss';

const SceneTitle = () => {
  const dispatch = useDispatch();
  const sceneTitles = useSelector((state) => state.sceneReducer.sceneTitles);
  const sceneId = useSelector((state) => state.sceneReducer.sceneId);
  const handleOpenPopup = useCallback(
    () => dispatch(changePopup()),
    [dispatch]
  );
  return (
    <div className='title-container'>
      <div className='title'>{sceneTitles[sceneId]}</div>
      <div className='edit-icon'>
        <FontAwesomeIcon icon={faEdit} onClick={handleOpenPopup} />
      </div>
    </div>
  );
};

SceneTitle.propTypes = {};

export default SceneTitle;
