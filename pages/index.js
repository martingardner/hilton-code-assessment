import React, { useState } from "react";
import serialize from "form-serialize";
import Roombox from "../components/roomBox";

const Main = () => {
  const [getRoom1, setRoom1] = useState(true);
  const [getRoom2, setRoom2] = useState(false);
  const [getRoom3, setRoom3] = useState(false);
  const [getRoom4, setRoom4] = useState(false);

  const formSubmit = e => {
    e.preventDefault();
    let form = document.querySelector("form");
    let obj = serialize(form, { disabled: true, empty: true, hash: true });
    localStorageSet(obj);
  };

  const localStorageSet = data => {
    if (data) {
      localStorage.clear();
      localStorage.setItem("Rooms", JSON.stringify(data));
    }
  };

  const checkNeighborRoom = (roomOrder, checked) => {
    switch (roomOrder) {
      case 4:
        setRoom4(checked);
      case 3:
        setRoom3(checked);
      case 2:
        setRoom2(checked);
        break;
      default:
        break;
    }
  };

  const roomData = [
    { name: "Room 1", checkbox: false, order: 1, checkboxState: getRoom1 },
    { name: "Room 2", checkbox: true, order: 2, checkboxState: getRoom2 },
    { name: "Room 3", checkbox: true, order: 3, checkboxState: getRoom3 },
    { name: "Room 4", checkbox: true, order: 4, checkboxState: getRoom4 }
  ];

  return (
    <>
      <form onSubmit={formSubmit}>
        <fieldset>
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
        <button>Submit</button>
      </form>
    </>
  );
};

export default Main;
