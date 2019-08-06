import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import RoomboxReducer from "../components/roomBox-reducer";

import MainReducer from "../pages/index-reducer";
import DataContext from "../context/DataContext";

afterEach(cleanup);

describe("roomBoxReducer component", () => {
  localStorage.clear(); // make sure there isn't any hanging local storage from development or other tests
  const checkbox4 = "[name='room4_checkbox']";
  const checkbox3 = "[name='room3_checkbox']";
  const checkbox2 = "[name='room2_checkbox']";

  it("roomBox should exist", () => {
    const component = render(
      <MainReducer>
        <DataContext.Provider>
          <RoomboxReducer room={1} />
        </DataContext.Provider>
      </MainReducer>
    );
    expect(component).toBeTruthy();
  });

  it("checkbox for roomBoxReducer for Room 2 should exist", () => {
    const component = render(
      <MainReducer>
        <DataContext.Provider>
          <RoomboxReducer room={2} />
        </DataContext.Provider>
      </MainReducer>
    );
    expect(document.querySelector(checkbox2)).toBeTruthy();
  });

  it("if roomBoxReducer is unchecked, adultPop should default to 1 and childPop should default to 0", () => {
    const component = render(
      <MainReducer>
        <DataContext.Provider>
          <RoomboxReducer room={2} />
        </DataContext.Provider>
      </MainReducer>
    );

    fireEvent.change(document.querySelector("[name='room2_adultpop']"), {
      target: { value: "2" }
    });
    fireEvent.change(document.querySelector("[name='room2_childpop']"), {
      target: { value: "2" }
    });

    expect(document.querySelector('[name="room2_adultpop"]').value).toEqual(
      "2"
    );
    expect(document.querySelector('[name="room2_childpop"]').value).toEqual(
      "2"
    );

    fireEvent(
      document.querySelector(checkbox2),
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

  describe("Scenarios where all checkboxes unchecked initially", () => {
    it("If Room 4 is checked, then Room 3 and Room 2 should also be checked", () => {
      const component = render(
        <MainReducer>
          <DataContext.Provider>
            <RoomboxReducer room={2} />
          </DataContext.Provider>
        </MainReducer>
      );

      fireEvent(
        document.querySelector(checkbox4),
        new MouseEvent("click", {
          bubbles: true,
          cancelable: true
        })
      );

      expect(document.querySelector(checkbox4).checked).toEqual(true);
      expect(document.querySelector(checkbox3).checked).toEqual(true);
      expect(document.querySelector(checkbox2).checked).toEqual(true);
    });

    it("If Room 3 checkbox is checked, then Room 2 checkbox should be checked and Room 4 should be unchecked", () => {
      const component = render(
        <MainReducer>
          <DataContext.Provider>
            <RoomboxReducer room={2} />
          </DataContext.Provider>
        </MainReducer>
      );
      fireEvent(
        document.querySelector(checkbox3),
        new MouseEvent("click", {
          bubbles: true,
          cancelable: true
        })
      );
      expect(document.querySelector(checkbox2).checked).toEqual(true);
      expect(document.querySelector(checkbox3).checked).toEqual(true);
      expect(document.querySelector(checkbox4).checked).toEqual(false);
    });

    it("if Room 2 checkbox is checked, then Room 2 should be checked and the other 2 not", () => {
      const component = render(
        <MainReducer>
          <DataContext.Provider>
            <RoomboxReducer room={2} />
          </DataContext.Provider>
        </MainReducer>
      );
      fireEvent(
        document.querySelector(checkbox2),
        new MouseEvent("click", {
          bubbles: true,
          cancelable: true
        })
      );
      expect(document.querySelector(checkbox2).checked).toEqual(true);
      expect(document.querySelector(checkbox3).checked).toEqual(false);
      expect(document.querySelector(checkbox4).checked).toEqual(false);
    });
  });

  describe("Scenario, Testing unclicking path if checkboxes are initially checked", () => {
    it("Room 4 is unchecked, Room 3 and Room 2 should still be checked", () => {
      const component = render(
        <MainReducer>
          <DataContext.Provider>
            <RoomboxReducer room={2} />
          </DataContext.Provider>
        </MainReducer>
      );
      fireEvent(
        document.querySelector(checkbox4),
        new MouseEvent("click", {
          bubbles: true,
          cancelable: true
        })
      );

      fireEvent(
        document.querySelector(checkbox4),
        new MouseEvent("click", {
          bubbles: true,
          cancelable: true
        })
      );

      expect(document.querySelector(checkbox2).checked).toEqual(true);
      expect(document.querySelector(checkbox3).checked).toEqual(true);
      expect(document.querySelector(checkbox4).checked).toEqual(false);
    });

    it("Room 3 is unchecked, Room 4 should uncheck, and Room 2 should stay checked", () => {
      const component = render(
        <MainReducer>
          <DataContext.Provider>
            <RoomboxReducer room={2} />
          </DataContext.Provider>
        </MainReducer>
      );
      fireEvent(
        document.querySelector(checkbox4),
        new MouseEvent("click", {
          bubbles: true,
          cancelable: true
        })
      );

      fireEvent(
        document.querySelector(checkbox3),
        new MouseEvent("click", {
          bubbles: true,
          cancelable: true
        })
      );

      expect(document.querySelector(checkbox2).checked).toEqual(true);
      expect(document.querySelector(checkbox3).checked).toEqual(false);
      expect(document.querySelector(checkbox4).checked).toEqual(false);
    });

    it("Room 2 is unchecked, Room 3 and Room 4 should also uncheck", () => {
      const component = render(
        <MainReducer>
          <DataContext.Provider>
            <RoomboxReducer room={2} />
          </DataContext.Provider>
        </MainReducer>
      );
      fireEvent(
        document.querySelector(checkbox4),
        new MouseEvent("click", {
          bubbles: true,
          cancelable: true
        })
      );

      fireEvent(
        document.querySelector(checkbox2),
        new MouseEvent("click", {
          bubbles: true,
          cancelable: true
        })
      );

      expect(document.querySelector(checkbox2).checked).toEqual(false);
      expect(document.querySelector(checkbox3).checked).toEqual(false);
      expect(document.querySelector(checkbox4).checked).toEqual(false);
    });
  });
});
