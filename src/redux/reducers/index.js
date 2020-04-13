import { combineReducers } from "redux";
import { NotesReducer } from "./NotesReducer";

export const AllReducers = combineReducers({
  Notes: NotesReducer,
});
