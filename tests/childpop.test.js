import React from "react";
import { render, cleanup } from "@testing-library/react";
import Childpop from "../components/childpop";

afterEach(cleanup);

describe("Childpop Component", () => {
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

  it("childpop select should have a value of 2 when local storage of it is 2", () => {
    const obj = {
      room1_childpop: "2"
    };
    localStorage.setItem("Rooms", JSON.stringify(obj));
    const component = render(<Childpop disableFields={true} room={1} />);
    expect(document.querySelector("select").value).toEqual("2");
    localStorage.clear();
  });

  it("childpop select should be disabled if disableFields true is sent through", () => {
    const component = render(<Childpop disableFields={true} room={1} />);
    expect(document.querySelector("select").disabled).toEqual(true);
  });

  it("childpop select should be abled if disableFields is false", () => {
    const component = render(<Childpop disableFields={false} room={1} />);
    expect(document.querySelector("select").disabled).toBeFalsy();
  });
});
