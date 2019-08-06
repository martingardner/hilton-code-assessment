import React, { useEffect, useContext } from "react";
import DataContext from "../context/DataContext";

const AdultpopReducer = props => {
  const { dataReducer, dispatch } = useContext(DataContext);

  const adultpopDispatchUpdate = val => {
    dispatch({
      type: "UPDATE_ACTIONINDEXVALUE",
      index: props.room,
      param: "adultpop",
      value: val
    });
  };

  const updateValue = e => {
    adultpopDispatchUpdate(e.target.value);
  };

  let disabled = dataReducer[props.room].checkboxChecked ? "" : "disabled";

  useEffect(() => {
    if (disabled) {
      adultpopDispatchUpdate(1);
    }
  }, [dataReducer[props.room].checkboxChecked]);

  return (
    <>
      <label style={label}>
        Adults <br />
        (18+)
      </label>
      <select
        onChange={updateValue}
        value={dataReducer[props.room].adultpop}
        disabled={disabled}
        name={`room${props.room}_adultpop`}
      >
        <option value="1">1</option>
        <option value="2">2</option>
      </select>
    </>
  );
};

export default AdultpopReducer;

//styles
const label = {
  display: "block"
};
