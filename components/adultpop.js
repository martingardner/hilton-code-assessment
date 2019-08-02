import React, { useState, useEffect } from "react";

const Adultpop = props => {
  const [getValue, setValue] = useState(1);

  const updateValue = e => {
    setValue(e.target.value);
  };

  let disabled = props.disableFields ? "disabled" : "";

  useEffect(() => {
    if (disabled) {
      setValue(1);
    }
  }, [props.disableFields]);

  //check localstorage for adultpop data
  //form-serialize will string numbers
  useEffect(() => {
    try {
      const roomLocalStorage = JSON.parse(localStorage.getItem("Rooms"));
      let roomAdultPop = roomLocalStorage[`room${props.room}_adultpop`];
      if (roomAdultPop) {
        setValue(roomAdultPop);
      }
    } catch (e) {}
  }, []);

  return (
    <>
      <label style={label}>
        Adults <br />
        (18+)
      </label>
      <select
        onChange={updateValue}
        value={getValue}
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
