import {
  SET_EDIT_SCENE_TITLE,
  SET_SCENE_ID,
  SET_DATA_SCENE,
  CHANGE_ROTATION,
} from '../actionType';

export const setSceneId = (data) => {
  return {
    type: SET_SCENE_ID,
    payload: data,
  };
};
export const setEditSceneTitle = (titleValue) => {
  return {
    type: SET_EDIT_SCENE_TITLE,
    payload: titleValue,
  };
};
export const setDataScene = (payload) => {
  return {
    type: SET_DATA_SCENE,
    payload,
  };
};
export const changeRotation = (payload) => {
  return {
    type: CHANGE_ROTATION,
    payload,
  };
};
