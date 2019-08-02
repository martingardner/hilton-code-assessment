import React, { useState, useEffect } from "react";

const Childpop = props => {
  const [getValue, setValue] = useState(0);

  const updateValue = e => {
    setValue(e.target.value);
  };

  let disabled = props.disableFields ? "disabled" : "";

  useEffect(() => {
    if (disabled) {
      setValue(0);
    }
  }, [props.disableFields]);

  //check localstorage for adultpop data
  //form-serialize will string numbers
  useEffect(() => {
    try {
      const roomLocalStorage = JSON.parse(localStorage.getItem("Rooms"));
      let roomChildPop = roomLocalStorage[`room${props.room}_childpop`];
      if (roomChildPop) {
        setValue(roomChildPop);
      }
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <>
      <label style={label}>
        Children <br />
        (0-17)
      </label>
      <select
        onChange={updateValue}
        value={getValue}
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

export default Childpop;

//styles
const label = {
  display: "block"
};
