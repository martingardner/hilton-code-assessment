import React, { useState, useEffect } from "react";

const Childpop = props => {
  const [getValue, setValue] = useState(0);

  const updateValue = e => {
    setValue(e.target.value);
  };

  let disabled = props.disableFields ? "disabled" : "";

  useEffect(() => {
    setValue(0);
  }, [props.disableFields]);

  return (
    <>
      <label>Children (0-17)</label>
      <select onChange={updateValue} value={getValue} disabled={disabled}>
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
      </select>
    </>
  );
};

export default Childpop;
