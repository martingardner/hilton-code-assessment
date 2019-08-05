import React, { useState, useEffect } from "react";

const Childpop = props => {
  //const [getValue, setValue] = useState(0);

  const updateValue = e => {
    //setValue(e.target.value);
    props.setdropdown(`${props.room}child`, e.target.value);
  };

  let disabled = props.disableFields ? "disabled" : "";

  useEffect(() => {
    if (disabled) {
      props.setdropdown(`${props.room}child`, 0);
    }
  }, [props.disableFields]);

  //check localstorage for adultpop data
  //form-serialize will string numbers
  /*
  useEffect(() => {
    try {
      const roomLocalStorage = JSON.parse(localStorage.getItem("Rooms"));
      let roomChildPop = roomLocalStorage[`room${props.room}_childpop`];
      if (roomChildPop) {
        setValue(roomChildPop);
      }
    } catch (e) {}
  }, []);
*/
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

export default Childpop;

//styles
const label = {
  display: "block"
};
