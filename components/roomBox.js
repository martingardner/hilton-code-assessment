import React, { useState, useEffect } from "react";
import Adultpop from "./adultpop";
import Childpop from "./childpop";

const Roombox = props => {
  console.log("Roombox", props);
  const [getCheckbox, setCheckbox] = useState(props.params.checkboxState);

  const updateCheckbox = e => {
    console.log("updateCheckbox", getCheckbox, !getCheckbox);
    setCheckbox(!getCheckbox);
    props.checkNeighborRoom(props.params.order, !getCheckbox);
  };

  useEffect(() => {
    setCheckbox(props.params.checkboxState);
  }, [props.params.checkboxState]);

  return (
    <div>
      <div>
        {props.params.checkbox && (
          <input
            type="checkbox"
            onChange={updateCheckbox}
            checked={getCheckbox}
          />
        )}
        {props.params.name}
      </div>
      <div>
        <div>
          <Adultpop disableFields={!getCheckbox} />
        </div>
        <div>
          <Childpop disableFields={!getCheckbox} />
        </div>
      </div>
    </div>
  );
};

export default Roombox;
