import React from "react";
import { render, cleanup } from "@testing-library/react";
import Roombox from "../components/roomBox";

afterEach(cleanup);

describe("roomBox component", () => {
  const roomData1 = {
    name: "Room 1",
    checkbox: false,
    order: 1,
    checkboxState: true
  };
  const roomData2 = {
    name: "Room 2",
    checkbox: true,
    order: 2,
    checkboxState: false
  };
  const roomData3 = {
    name: "Room 3",
    checkbox: true,
    order: 2,
    checkboxState: true
  };

  const checkNeighborRoom = () => {
    return false;
  };

  it("roomBox should exist", () => {
    const component = render(
      <Roombox params={roomData1} checkNeighborRoom={checkNeighborRoom} />
    );
    expect(component).toBeTruthy();
  });

  it("roomBox with roomData1 should not have a checkbox [checkbox param]", () => {
    const component = render(
      <Roombox params={roomData1} checkNeighborRoom={checkNeighborRoom} />
    );
    expect(document.querySelector("input[type=checkbox]")).toBeFalsy();
  });

  it("roomBox wtih roomData2 should have a checkbox [checkbox param]", () => {
    const component = render(
      <Roombox params={roomData2} checkNeighborRoom={checkNeighborRoom} />
    );

    expect(document.querySelector("input[type=checkbox]")).toBeTruthy();
  });

  it("roomBox with roomData3 should have checkbox checked [checkboxState param]", () => {
    const component = render(
      <Roombox params={roomData3} checkNeighborRoom={checkNeighborRoom} />
    );

    expect(document.querySelector("input[type=checkbox]").checked).toEqual(
      true
    );
  });

  //form-serialize uses on to represent checked for a checkbox
  it("roomBox with roomData2 unchecked, should show as checked if localstorage returns an on", () => {
    const obj = {
      room2_checkbox: "on"
    };
    localStorage.setItem("Rooms", JSON.stringify(obj));

    const component = render(
      <Roombox params={roomData2} checkNeighborRoom={checkNeighborRoom} />
    );

    expect(document.querySelector("input[type=checkbox]").checked).toEqual(
      true
    );

    localStorage.clear();
  });
});
