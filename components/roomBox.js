import React, { useState } from "react";
import Adultpop from "./adultpop";
import Childpop from "./childpop";

const Roombox = data => {
  //console.log("Roombox", data);
  const [getCheckbox, setCheckbox] = useState(false);

  const updateCheckbox = e => {
    console.log("updateCheckbox", getCheckbox, !getCheckbox);
    setCheckbox(!getCheckbox);
  };

  return (
    <div>
      <div>
        {data.params.checkbox && (
          <input
            type="checkbox"
            onChange={updateCheckbox}
            checked={getCheckbox}
          />
        )}
        {data.params.name}
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
