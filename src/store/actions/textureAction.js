import { SET_EDIT_SCENETITLE, SET_STATE_TEXTURE_REDUCER } from "../actionType";

export const setStateTextureReducer = (data) => {
  return {
    type: SET_STATE_TEXTURE_REDUCER,
    payload: data,
  };
};
export const setEditSceneTitle = (titleValue) => {
  return {
    type: SET_EDIT_SCENETITLE,
    payload: titleValue,
  };
};
