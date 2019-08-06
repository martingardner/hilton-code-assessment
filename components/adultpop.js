import React, { useState, useEffect } from "react";

const Adultpop = props => {
  const updateValue = e => {
    props.setdropdown(`${props.room}adult`, e.target.value);
  };

  let disabled = props.disableFields ? "disabled" : "";

  useEffect(() => {
    if (disabled) {
      props.setdropdown(`${props.room}adult`, 1);
    }
  }, [props.disableFields]);

  return (
    <>
      <label style={label}>
        Adults <br />
        (18+)
      </label>
      <select
        onChange={updateValue}
        value={props.adultpop}
        disabled={disabled}
        name={`room${props.room}_adultpop`}
      >
        <option value="1">1</option>
        <option value="2">2</option>
      </select>
    </>
  );
};

export default Adultpop;

//styles
const label = {
  display: "block"
};
