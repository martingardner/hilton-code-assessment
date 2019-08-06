import React, { useState, useEffect } from "react";
import AdultpopReducer from "./adultpop-reducer";
import ChildpopReducer from "./childpop-reducer";

const RoomboxReducer = props => {
  const updateCheckbox = e => {
    props.checkNeighborRoom(props.params.order, !props.params.checkboxState);
  };

  let box = props.params.checkboxState ? boxStyle : disabledBox;

  return (
    <div style={box}>
      <div style={checkboxRow}>
        {props.params.checkbox && (
          <input
            type="checkbox"
            onChange={updateCheckbox}
            checked={props.params.checkboxState}
            name={`room${props.params.order}_checkbox`}
          />
        )}
        {props.params.name}
      </div>
      <div>
        <div style={dropdownBox}>
          <AdultpopReducer
            disableFields={!props.params.checkboxState}
            room={props.params.order}
            adultpop={props.params.adultpop}
            setdropdown={props.params.setdropdown}
          />
        </div>
        <div style={dropdownBox}>
          <ChildpopReducer
            disableFields={!props.params.checkboxState}
            room={props.params.order}
            childpop={props.params.childpop}
            setdropdown={props.params.setdropdown}
          />
        </div>
      </div>
    </div>
  );
};

export default RoomboxReducer;

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
