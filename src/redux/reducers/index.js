import { combineReducers } from "redux";
import { NotesReducer } from "./NotesReducer";
import SettingsReducer from "./SettingsReducer";

export const AllReducers = combineReducers({
  Notes: NotesReducer,
  Settings: SettingsReducer,
});
