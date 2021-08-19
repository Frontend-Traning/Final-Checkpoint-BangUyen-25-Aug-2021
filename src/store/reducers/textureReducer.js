import { SET_LIST_TEXTURE } from "../actionType";

const initialState = {
  listTexture: {},
};

const textureReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LIST_TEXTURE: {
      // console.log("-----------123", action.payload);
      let newTextures = {};
      for (let i in action.payload) {
        newTextures[action.payload[i].id] =
          action.payload[i].cubeMapImages.size1024;
      }
      // console.log("---newTextures", newTextures);
      return {
        ...state,
        listTexture: newTextures,
      };
    }
    default:
      return state;
  }
};
export default textureReducer;
