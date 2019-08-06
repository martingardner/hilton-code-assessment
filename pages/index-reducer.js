import React, { useEffect, useReducer } from "react";
import RoomsReducer from "../reducer/RoomsReducer";
import InitValues from "../data/InitValues";
import DataContext from "../context/DataContext";
import RoomboxReducer from "../components/roomBox-reducer";

const MainReducer = () => {
  const [dataReducer, dispatch] = useReducer(RoomsReducer, []);

  const formSubmit = e => {
    e.preventDefault();
    let form = document.querySelector("form");
    localStorageSet();
  };

  const localStorageSet = () => {
    localStorage.clear();
    localStorage.setItem("RoomsReducer", JSON.stringify(dataReducer));
  };

  const setStateFromStorage = () => {
    let storage = JSON.parse(localStorage.getItem("RoomsReducer"));
    console.log("storage", storage);
    dispatchPopulateData(storage);
  };

  const dispatchPopulateData = data => {
    dispatch({
      type: "POPULATE_DATA",
      data: data
    });
  };

  //check localstorage for Rooms object
  useEffect(() => {
    dispatchPopulateData(InitValues);

    try {
      if (localStorage.getItem("RoomsReducer")) {
        setStateFromStorage();
      }
    } catch (e) {}
  }, []);

  //console.log("dataReducer", dataReducer);
  return (
    <DataContext.Provider value={{ dataReducer, dispatch }}>
      <form onSubmit={formSubmit}>
        <fieldset style={fieldset}>
          {dataReducer &&
            Object.keys(dataReducer).map((data, index) => {
              return <RoomboxReducer key={index + data} room={data} />;
            })}
        </fieldset>
        <button className="submit" style={submitButton}>
          Submit
        </button>
      </form>
    </DataContext.Provider>
  );
};

export default MainReducer;

//styles
const fieldset = {
  border: "none"
};

const submitButton = {
  marginLeft: "20px",
  padding: "10px"
};

const clearLocalStorageBtn = {
  marginLeft: "20px",
  padding: "10px",
  marginTop: "20px"
};
