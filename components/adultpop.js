import React, { useState } from "react";

const Adultpop = disableFields => {
  const [getValue, setValue] = useState(1);

  const updateValue = e => {
    setValue(e.target.value);
  };

  let disabled = disableFields ? "disabled" : "";

  return (
    <>
      <label>Adults (18+)</label>
      <select onChange={updateValue} value={getValue} disabled={disabled}>
        <option value="1">1</option>
        <option value="2">2</option>
      </select>
    </>
  );
};

export default Adultpop;
