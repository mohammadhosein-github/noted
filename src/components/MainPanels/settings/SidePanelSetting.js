import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { SET_NAVIGATION_BAR_SETTINGS } from "../../../redux/actinos";
import InputField from "./FormComponents/InputField";

export default function SidePanelSetting() {
  const dispatch = useDispatch();

  const [input_values, set_input_values] = useState({
    application_logo: "",
  });

  const handle_input_value = (e) => {
    set_input_values({ ...input_values, [e.target.name]: e.target.value });
  };

  const handle_submit_form = (e) => {
    e.preventDefault();
    if (input_values.application_logo !== "") {
      // set value in state
      dispatch(SET_NAVIGATION_BAR_SETTINGS(input_values));

      // reset input values
      set_input_values({ application_logo: "" });
    }
  };

  return (
    <div className="d-block">
      <h3 className="text-capitalize mb-4">navigation panel</h3>
      <form>
        <InputField
          label_title={"App logo"}
          input_name={"application_logo"}
          input_value={input_values.application_logo}
          input_handler={handle_input_value}
        />
        <button type="submit" onClick={handle_submit_form}>
          Save
        </button>
      </form>
    </div>
  );
}
