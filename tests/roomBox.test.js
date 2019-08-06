import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import Roombox from "../components/roomBox";

afterEach(cleanup);

describe("roomBox component", () => {
  localStorage.clear(); // make sure there isn't any hanging local storage from development or other tests

  const roomData1 = {
    name: "Room 1",
    checkbox: false,
    order: 1,
    checkboxState: true,
    setdropdown() {
      return false;
    }
  };
  const roomData2 = {
    name: "Room 2",
    checkbox: true,
    order: 2,
    checkboxState: false,
    setdropdown() {
      return false;
    }
  };
  const roomData3 = {
    name: "Room 3",
    checkbox: true,
    order: 2,
    checkboxState: true,
    setdropdown() {
      return false;
    }
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

  it("if roomBox is unchecked, adultPop should default to 1 and childPop should default to 0", () => {
    const component = render(
      <Roombox params={roomData3} checkNeighborRoom={checkNeighborRoom} />
    );

    document.querySelector('[name="room2_adultpop"]').value = "2";
    document.querySelector('[name="room2_childpop"]').value = "2";

    expect(document.querySelector('[name="room2_adultpop"]').value).toEqual(
      "2"
    );
    expect(document.querySelector('[name="room2_childpop"]').value).toEqual(
      "2"
    );

    fireEvent(
      document.querySelector('[name="room2_checkbox"]'),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true
      })
    );

    setTimeout(() => {
      expect(document.querySelector('[name="room2_adultpop"]').value).toEqual(
        "1"
      );
      expect(document.querySelector('[name="room2_childpop"]').value).toEqual(
        "0"
      );
    }, 500);
  });
});
