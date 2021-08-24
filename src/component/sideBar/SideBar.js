import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faListUl,
  faMapMarkerAlt,
  faPauseCircle,
  faPlay,
} from '@fortawesome/free-solid-svg-icons';
import { changeRotation, setSceneId } from '../../store/actions/sceneAction';
import './style.scss';

const SideBar = () => {
  const [isShowListScene, setIsShowListScene] = useState(false);
  const sceneTitles = useSelector((state) => state.sceneReducer.sceneTitles);
  const sceneId = useSelector((state) => state.sceneReducer.sceneId);
  const isRotate = useSelector((state) => state.sceneReducer.isRotate);
  const dispatch = useDispatch();
  const handleChangeScene = useCallback(
    (e) => {
      const currentId = e.target.getAttribute('sceneid');
      dispatch(setSceneId(currentId));
      dispatch(changeRotation(false));
    },
    [dispatch]
  );
  const handleShowListScene = useCallback(
    () => setIsShowListScene(!isShowListScene),
    [isShowListScene]
  );
  const handleRotate = useCallback(
    () => dispatch(changeRotation(!isRotate)),
    [dispatch, isRotate]
  );
  return (
    <div className='side-bar'>
      <div className='list'>
        <FontAwesomeIcon
          icon={faListUl}
          className='icon'
          onClick={handleShowListScene}
        />
        {isShowListScene && (
          <div className='scene'>
            {Object.keys(sceneTitles).map((item) => (
              <button
                className='scene-title'
                key={item}
                sceneid={item}
                disabled={item === sceneId}
                onClick={handleChangeScene}
              >
                {<FontAwesomeIcon icon={faMapMarkerAlt} />} {sceneTitles[item]}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className='rotate-btn' onClick={handleRotate}>
        <div>
          {isRotate ? (
            <FontAwesomeIcon icon={faPauseCircle} className='icon' />
          ) : (
            <FontAwesomeIcon icon={faPlay} className='icon' />
          )}
        </div>
      </div>
    </div>
  );
};

SideBar.propTypes = {};

export default SideBar;
