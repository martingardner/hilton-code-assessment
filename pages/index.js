import React, { useState, useEffect } from "react";
import Roombox from "../components/roomBox";

const Main = () => {
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

  const formSubmit = e => {
    e.preventDefault();
    let form = document.querySelector("form");
    localStorageSet();
  };

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

  const setDropdownPop = (prop, val) => {
    switch (prop) {
      case "1adult":
        setAdultPop1(val);
        break;
      case "1child":
        setChildPop1(val);
        break;
      case "2adult":
        setAdultPop2(val);
        break;
      case "2child":
        setChildPop2(val);
        break;
      case "3adult":
        setAdultPop3(val);
        break;
      case "3child":
        setChildPop3(val);
        break;
      case "4child":
        setChildPop4(val);
        break;
      case "4adult":
        setAdultPop4(val);
        break;
      default:
        break;
    }
  };

  const checkNeighborRoom = (roomOrder, checked) => {
    switch (roomOrder) {
      case 4:
        if (checked) {
          setRoom4(checked);
          setRoom3(checked);
          setRoom2(checked);
        } else {
          setRoom4(checked);
        }
        break;
      case 3:
        if (checked) {
          setRoom3(checked);
          setRoom2(checked);
        } else {
          setRoom3(checked);
          setRoom4(checked);
        }
        break;
      case 2:
        if (checked) {
          setRoom2(checked);
        } else {
          setRoom2(checked);
          setRoom3(checked);
          setRoom4(checked);
        }
        break;
      default:
        break;
    }
  };

  const roomData = [
    {
      name: "Room 1",
      checkbox: false,
      order: 1,
      checkboxState: getRoom1,
      adultpop: getAdultPop1,
      childpop: getChildPop1,
      setdropdown: setDropdownPop
    },
    {
      name: "Room 2",
      checkbox: true,
      order: 2,
      checkboxState: getRoom2,
      adultpop: getAdultPop2,
      childpop: getChildPop2,
      setdropdown: setDropdownPop
    },
    {
      name: "Room 3",
      checkbox: true,
      order: 3,
      checkboxState: getRoom3,
      adultpop: getAdultPop3,
      childpop: getChildPop3,
      setdropdown: setDropdownPop
    },
    {
      name: "Room 4",
      checkbox: true,
      order: 4,
      checkboxState: getRoom4,
      adultpop: getAdultPop4,
      childpop: getChildPop4,
      setdropdown: setDropdownPop
    }
  ];

  //check localstorage for Rooms object
  useEffect(() => {
    try {
      if (localStorage.getItem("Rooms")) {
        setStateFromStorage();
      }
    } catch (e) {}
  }, []);

  return (
    <>
      <form onSubmit={formSubmit}>
        <fieldset style={fieldset}>
          {roomData &&
            roomData.map((data, index) => {
              return (
                <Roombox
                  key={index + data.name}
                  params={data}
                  checkNeighborRoom={checkNeighborRoom}
                />
              );
            })}
        </fieldset>
        <button className="submit" style={submitButton}>
          Submit
        </button>
      </form>
    </>
  );
};

export default Main;

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
