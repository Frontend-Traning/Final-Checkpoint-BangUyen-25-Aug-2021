import { CHANGE_MODAL } from '../actionType';

const initialState = {
  modal: false,
};
const popupReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_MODAL: {
      const newModal = !state.modal;
      return {
        ...state,
        modal: newModal,
      };
    }

    default:
      return state;
  }
};
export default popupReducer;
