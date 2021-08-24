import {
  SET_EDIT_SCENE_TITLE,
  SET_SCENE_ID,
  SET_DATA_SCENE,
  CHANGE_ROTATION,
} from '../actionType';

const initialState = {
  textures: {},
  sceneTitles: {},
  sceneId: '',
  isRotate: false,
};

const sceneReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA_SCENE: {
      const { sceneId, textures, sceneTitles } = action.payload;
      return {
        ...state,
        textures: textures,
        sceneTitles: sceneTitles,
        sceneId: sceneId,
      };
    }

    case SET_SCENE_ID: {
      const newId = action.payload;
      return {
        ...state,
        sceneId: newId,
      };
    }
    case SET_EDIT_SCENE_TITLE: {
      const { sceneId, inputValue } = action.payload;
      const newListTitle = { ...state.sceneTitles, [sceneId]: inputValue };
      return {
        ...state,
        sceneTitles: newListTitle,
      };
    }
    case CHANGE_ROTATION: {
      const newRotate = action.payload;
      return {
        ...state,
        isRotate: newRotate,
      };
    }
    default:
      return state;
  }
};
export default sceneReducer;
