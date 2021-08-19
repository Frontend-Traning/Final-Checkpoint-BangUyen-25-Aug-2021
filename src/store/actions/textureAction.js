import { SET_LIST_TEXTURE } from "../actionType";

export const setListTexture = (data) => {
  return {
    type: SET_LIST_TEXTURE,
    payload: data,
  };
};
