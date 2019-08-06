import React, { useState, useEffect } from "react";

const ChildpopReducer = props => {
  const updateValue = e => {
    props.setdropdown(`${props.room}child`, e.target.value);
  };

  let disabled = props.disableFields ? "disabled" : "";

  useEffect(() => {
    if (disabled) {
      props.setdropdown(`${props.room}child`, 0);
    }
  }, [props.disableFields]);

  return (
    <>
      <label style={label}>
        Children <br />
        (0-17)
      </label>
      <select
        onChange={updateValue}
        value={props.childpop}
        disabled={disabled}
        name={`room${props.room}_childpop`}
      >
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
      </select>
    </>
  );
};

export default ChildpopReducer;

//styles
const label = {
  display: "block"
};
