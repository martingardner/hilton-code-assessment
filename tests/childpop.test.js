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
