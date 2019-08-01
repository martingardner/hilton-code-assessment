import React, { useState } from "react";
import Roombox from "../components/roomBox";

export const roomData = [
  { name: "Room 1", checkbox: false },
  { name: "Room 2", checkbox: true },
  { name: "Room 3", checkbox: true },
  { name: "Room 4", checkbox: true }
];

const Main = () => {
  const formSubmit = e => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={formSubmit}>
        <fieldset>
          {roomData &&
            roomData.map((data, index) => {
              return <Roombox key={index + data.name} params={data} />;
            })}
        </fieldset>
        <button>Submit</button>
      </form>
    </>
  );
};

export default Main;
