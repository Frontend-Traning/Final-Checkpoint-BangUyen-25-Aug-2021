import { SET_STATE_TEXTURE_REDUCER, SET_EDIT_SCENETITLE } from "../actionType";

const initialState = {
  listTexture: {},
  listSceneTitle: {},
};

const textureReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STATE_TEXTURE_REDUCER: {
      let newTextures = {};
      let newSceneTitle = {};
      for (let i in action.payload) {
        newTextures[action.payload[i].id] =
          action.payload[i].cubeMapImages.size1024;
        newSceneTitle[action.payload[i].id] = action.payload[i].title;
      }
      return {
        ...state,
        listTexture: newTextures,
        listSceneTitle: newSceneTitle,
      };
    }
    case SET_EDIT_SCENETITLE: {
      const { currentId, inputValue } = action.payload;
      let newListTitle = { ...state.listSceneTitle, [currentId]: inputValue };
      console.log(newListTitle);
      return {
        ...state,
        listSceneTitle: newListTitle,
      };
    }
    default:
      return state;
  }
};
export default textureReducer;
