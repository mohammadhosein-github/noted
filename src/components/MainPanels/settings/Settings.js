import React from "react";
import { useSelector } from "react-redux";
import SidePanelSetting from "./SidePanelSetting";
import AllNotesSettings from "./AllNotesSettings";

export default function Settings() {
  const all_notes_settings = useSelector((state) => state.Settings.all_notes);

  return (
    <div
      className="main-panel"
      style={{ backgroundColor: all_notes_settings.background_color }}
    >
      <div className="px-5 pt-5">
        <div className="header mb-5">
          <h1>Settings</h1>
          <p>customize the look of your notes!</p>
        </div>
        <div className="row">
          <div className="col-6 left-side">
            <SidePanelSetting />
          </div>
          <div className="col-6 right-side">
            <AllNotesSettings />
          </div>
        </div>
      </div>
    </div>
  );
}
