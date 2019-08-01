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
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <div>
      <div>
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
        <div>
          <Adultpop disableFields={!getCheckbox} room={props.params.order} />
        </div>
        <div>
          <Childpop disableFields={!getCheckbox} room={props.params.order} />
        </div>
      </div>
    </div>
  );
};

export default Roombox;
