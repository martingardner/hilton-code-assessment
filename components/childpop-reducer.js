import React, { useEffect, useContext } from "react";
import DataContext from "../context/DataContext";

const ChildpopReducer = props => {
  const { dataReducer, dispatch } = useContext(DataContext);

  const childpopDispatchUpdate = val => {
    dispatch({
      type: "UPDATE_ACTIONINDEXVALUE",
      index: props.room,
      param: "childpop",
      value: val
    });
  };

  const updateValue = e => {
    childpopDispatchUpdate(e.target.value);
  };

  let disabled = dataReducer[props.room].checkboxChecked ? "" : "disabled";

  useEffect(() => {
    if (disabled) {
      childpopDispatchUpdate(0);
    }
  }, [dataReducer[props.room].checkboxChecked]);

  return (
    <>
      <label style={label}>
        Children <br />
        (0-17)
      </label>
      <select
        onChange={updateValue}
        value={dataReducer[props.room].childpop}
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

export default ChildpopReducer;

//styles
const label = {
  display: "block"
};
