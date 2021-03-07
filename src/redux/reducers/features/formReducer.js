import { FORM_EDIT_TASK, FORM_ADD_TASK } from "../../actions/actionTypes";

const initialState = {
  showFormEditTask: false,
};

export const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case FORM_ADD_TASK: {
      break;
    }
    case FORM_EDIT_TASK: {
      return { ...state, showFormEditTask: !state.showFormEditTask };
    }
    default:
      return state;
  }
};
