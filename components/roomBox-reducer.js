import React, { useEffect, useContext } from "react";
import DataContext from "../context/DataContext";
import AdultpopReducer from "./adultpop-reducer";
import ChildpopReducer from "./childpop-reducer";

const RoomboxReducer = props => {
  const { dataReducer, dispatch } = useContext(DataContext);

  const updateCheckbox = e => {
    //props.checkNeighborRoom(props.params.order, !props.params.checkboxState);
    //console.log("updateCheckbox");
    dispatch({
      type: "UPDATE_ACTIONINDEXVALUE",
      index: props.room,
      param: "checkboxChecked",
      value: e.target.checked
    });
  };

  //let box = props.params.checkboxState ? boxStyle : disabledBox;
  console.log("dataReducer", dataReducer, props.room);
  let box = dataReducer[props.room].checkboxChecked ? boxStyle : disabledBox;

  return (
    <div style={box}>
      <div style={checkboxRow}>
        {dataReducer[props.room].checkboxInput && (
          <input
            type="checkbox"
            onChange={updateCheckbox}
            checked={dataReducer[props.room].checkboxChecked}
            name={`room${dataReducer[props.room].order}_checkbox`}
          />
        )}
        {dataReducer[props.room].name}
      </div>
      <div>
        <div style={dropdownBox}>{<AdultpopReducer room={props.room} />}</div>
        <div style={dropdownBox}>{<ChildpopReducer room={props.room} />}</div>
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
