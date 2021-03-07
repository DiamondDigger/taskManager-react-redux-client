import { combineReducers } from "redux";
import { formReducer } from "./features/formReducer";

export const rootReducer = combineReducers({
  forms: formReducer,
});
