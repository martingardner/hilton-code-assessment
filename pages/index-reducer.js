import React, { useState, useEffect, useReducer } from "react";
import RoomsReducer from "../reducer/RoomsReducer";
import InitValues from "../data/InitValues";
import DataContext from "../context/DataContext";
import RoomboxReducer from "../components/roomBox-reducer";

const MainReducer = () => {
  const [dataReducer, dispatch] = useReducer(RoomsReducer, []);
  /*
  const [getRoom1, setRoom1] = useState(true);
  const [getAdultPop1, setAdultPop1] = useState(1);
  const [getChildPop1, setChildPop1] = useState(0);
  const [getRoom2, setRoom2] = useState(false);
  const [getAdultPop2, setAdultPop2] = useState(1);
  const [getChildPop2, setChildPop2] = useState(0);
  const [getRoom3, setRoom3] = useState(false);
  const [getAdultPop3, setAdultPop3] = useState(1);
  const [getChildPop3, setChildPop3] = useState(0);
  const [getRoom4, setRoom4] = useState(false);
  const [getAdultPop4, setAdultPop4] = useState(1);
  const [getChildPop4, setChildPop4] = useState(0);
*/
  const formSubmit = e => {
    e.preventDefault();
    let form = document.querySelector("form");
    //localStorageSet();
  };

  /*
  const localStorageSet = () => {
    localStorage.clear();

    let localStorageObj = {
      AdultPop1: getAdultPop1,
      ChildPop1: getChildPop1,
      Room2: getRoom2,
      AdultPop2: getAdultPop2,
      ChildPop2: getChildPop2,
      Room3: getRoom3,
      AdultPop3: getAdultPop3,
      ChildPop3: getChildPop3,
      Room4: getRoom4,
      AdultPop4: getAdultPop4,
      ChildPop4: getChildPop4
    };

    localStorage.setItem("Rooms", JSON.stringify(localStorageObj));
  };

  const setStateFromStorage = () => {
    let storage = JSON.parse(localStorage.getItem("Rooms"));

    setAdultPop1(storage.AdultPop1);
    setChildPop1(storage.ChildPop1);
    setRoom2(storage.Room2);
    setAdultPop2(storage.AdultPop2);
    setChildPop2(storage.ChildPop2);
    setRoom3(storage.Room3);
    setAdultPop3(storage.AdultPop3);
    setChildPop3(storage.ChildPop3);
    setRoom4(storage.Room4);
    setAdultPop4(storage.AdultPop4);
    setChildPop4(storage.ChildPop4);
  };
  */

  //check localstorage for Rooms object
  useEffect(() => {
    dispatch({
      type: "POPULATE_DATA",
      data: InitValues
    });
    /*
    try {
      if (localStorage.getItem("Rooms")) {
        setStateFromStorage();
      }
    } catch (e) {}
    */
  }, []);

  //console.log("dataReducer", dataReducer);
  return (
    <DataContext.Provider value={{ dataReducer, dispatch }}>
      <form onSubmit={formSubmit}>
        <fieldset style={fieldset}>
          {/*roomData &&
            roomData.map((data, index) => {
              return (
                <RoomboxReducer
                  key={index + data.name}
                  params={data}
                  checkNeighborRoom={checkNeighborRoom}
                />
              );
            })
        */}
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
