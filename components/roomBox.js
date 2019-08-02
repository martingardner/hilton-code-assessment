import React, { useState, useEffect } from "react";
import Adultpop from "./adultpop";
import Childpop from "./childpop";

const Roombox = props => {
  const [getCheckbox, setCheckbox] = useState(props.params.checkboxState);

  const updateCheckbox = e => {
    setCheckbox(!getCheckbox);
    props.checkNeighborRoom(props.params.order, !getCheckbox);
  };

  useEffect(() => {
    setCheckbox(props.params.checkboxState);
  }, [props.params.checkboxState]);

  //check localstorage for checkbox data
  //form-serialize uses on to represent checked for a checkbox
  useEffect(() => {
    try {
      const roomLocalStorage = JSON.parse(localStorage.getItem("Rooms"));
      let roomCheckbox = roomLocalStorage[`room${props.params.order}_checkbox`];
      if (roomCheckbox === "on") {
        setCheckbox(true);
      }
    } catch (e) {}
  }, []);

  let box = getCheckbox ? boxStyle : disabledBox;

  return (
    <div style={box}>
      <div style={checkboxRow}>
        {props.params.checkbox && (
          <input
            type="checkbox"
            onChange={updateCheckbox}
            checked={getCheckbox}
            name={`room${props.params.order}_checkbox`}
          />
        )}
        {props.params.name}
      </div>
      <div>
        <div style={dropdownBox}>
          <Adultpop disableFields={!getCheckbox} room={props.params.order} />
        </div>
        <div style={dropdownBox}>
          <Childpop disableFields={!getCheckbox} room={props.params.order} />
        </div>
      </div>
    </div>
  );
};

export default Roombox;

// styles
const boxStyle = {
  display: "inline-block",
  width: "200px",
  height: "100px",
  border: "3px",
  borderStyle: "solid",
  borderColor: "#ccc",
  marginRight: "10px",
  borderRadius: "10px",
  overflow: "hidden"
};

const disabledBox = {
  display: "inline-block",
  width: "200px",
  height: "100px",
  border: "3px",
  borderStyle: "solid",
  borderColor: "#ccc",
  marginRight: "10px",
  borderRadius: "10px",
  overflow: "hidden",
  backgroundColor: "#ccc"
};

const checkboxRow = {
  backgroundColor: "#ccc",
  padding: "5px 10px"
};

const dropdownBox = {
  display: "inline-block",
  width: "80px",
  padding: "10px"
};
