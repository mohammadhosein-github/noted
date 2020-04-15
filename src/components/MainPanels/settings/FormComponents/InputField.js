import React from "react";

export default function InputField(props) {
  return (
    <div className="form-group position-relative">
      <label htmlFor="background_image">{props.label_title}</label>
      <input
        className="form-control"
        name={props.input_name}
        value={props.input_value}
        onChange={props.input_handler}
        placeholder="Image URL"
      />
    </div>
  );
}
