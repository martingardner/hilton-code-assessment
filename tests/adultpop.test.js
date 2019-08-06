import React from "react";
import { render, cleanup } from "@testing-library/react";
import Adultpop from "../components/adultpop";

afterEach(cleanup);

describe("Adultpop component", () => {
  const setdropdown = () => {
    return false;
  };

  it("Adultpop should exist", () => {
    const component = render(
      <Adultpop disableFields={false} room={2} setdropdown={setdropdown} />
    );
    expect(component).toBeTruthy();
  });

  it("Adultpop select should have name of room1_childpop when given room 1", () => {
    const component = render(
      <Adultpop disableFields={true} room={1} setdropdown={setdropdown} />
    );
    expect(document.querySelector("select").name).toEqual("room1_adultpop");
  });

  it("Adultpop select inital value should equal '1'", () => {
    const component = render(
      <Adultpop disableFields={true} room={1} setdropdown={setdropdown} />
    );
    expect(document.querySelector("select").value).toEqual("1");
  });

  it("Adultpop select should be disabled if disableFields true is sent through", () => {
    const component = render(
      <Adultpop disableFields={true} room={1} setdropdown={setdropdown} />
    );
    expect(document.querySelector("select").disabled).toEqual(true);
  });

  it("Adultpop select should be abled if disableFields is false", () => {
    const component = render(
      <Adultpop disableFields={false} room={1} setdropdown={setdropdown} />
    );
    expect(document.querySelector("select").disabled).toBeFalsy();
  });
});
