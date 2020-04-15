import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { SET_ALL_NOTES_SETTINGS } from "../../../redux/actinos";
import InputField from "./FormComponents/InputField";

export default function AllNotesSettings() {
  const dispatch = useDispatch();

  const [input_values, set_input_values] = useState({
    background_image: "",
  });

  const handle_input_value = (e) => {
    set_input_values({ ...input_values, [e.target.name]: e.target.value });
  };

  const handle_submit_form = (e) => {
    e.preventDefault();
    if (input_values.background_image !== "") {
      // set value in state
      dispatch(SET_ALL_NOTES_SETTINGS(input_values));

      // reset input values
      set_input_values({ background_image: "" });
    }
  };
  return (
    <div className="d-block">
      <h3 className="text-capitalize mb-4">all notes</h3>
      <form>
        <InputField
          label_title={"Background image"}
          input_name={"background_image"}
          input_value={input_values.background_image}
          input_handler={handle_input_value}
        />

        <button type="submit" onClick={handle_submit_form}>
          Save
        </button>
      </form>
    </div>
  );
}
