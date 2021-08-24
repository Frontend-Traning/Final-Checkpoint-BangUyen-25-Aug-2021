import { combineReducers } from 'redux';
import sceneReducer from './sceneReducer.js';
import popupReducer from './popupReducer.js';

const rootReducer = combineReducers({ sceneReducer, popupReducer });
export default rootReducer;
