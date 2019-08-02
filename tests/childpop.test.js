import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import Childpop from "../components/childpop";

afterEach(cleanup);

it("childpop should exist", () => {
  const component = render(<Childpop disableFields={true} room={1} />);
  expect(component).toBeTruthy();
});

it("childpop select should have name of room1_childpop when given room 1", () => {
  const component = render(<Childpop disableFields={true} room={1} />);
  expect(document.querySelector("select").name).toEqual("room1_childpop");
});

it("childpop select inital value should equal '0'", () => {
  const component = render(<Childpop disableFields={true} room={1} />);
  expect(document.querySelector("select").value).toEqual("0");
});

// test passes, and assertion does show select value becomes 2, error in the logs after the test passes appear to be because of the
// catch(e) console.log(e) response
it("childpop select should have a value of 2 when local storage of it is 2", () => {
  const obj = {
    room1_childpop: "2"
  };
  localStorage.setItem("Rooms", JSON.stringify(obj));
  const component = render(<Childpop disableFields={true} room={1} />);
  expect(document.querySelector("select").value).toEqual("2");
  localStorage.clear();
});
