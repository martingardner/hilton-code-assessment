import React from "react";
import { render, cleanup } from "@testing-library/react";
import Childpop from "../components/childpop";

afterEach(cleanup);

describe("Childpop Component", () => {
  const setdropdown = () => {
    return false;
  };

  it("childpop should exist", () => {
    const component = render(
      <Childpop disableFields={true} room={1} setdropdown={setdropdown} />
    );
    expect(component).toBeTruthy();
  });

  it("childpop select should have name of room1_childpop when given room 1", () => {
    const component = render(
      <Childpop disableFields={true} room={1} setdropdown={setdropdown} />
    );
    expect(document.querySelector("select").name).toEqual("room1_childpop");
  });

  it("childpop select inital value should equal '0'", () => {
    const component = render(
      <Childpop disableFields={true} room={1} setdropdown={setdropdown} />
    );
    expect(document.querySelector("select").value).toEqual("0");
  });

  it("childpop select should be disabled if disableFields true is sent through", () => {
    const component = render(
      <Childpop disableFields={true} room={1} setdropdown={setdropdown} />
    );
    expect(document.querySelector("select").disabled).toEqual(true);
  });

  it("childpop select should be abled if disableFields is false", () => {
    const component = render(
      <Childpop disableFields={false} room={1} setdropdown={setdropdown} />
    );
    expect(document.querySelector("select").disabled).toBeFalsy();
  });
});
