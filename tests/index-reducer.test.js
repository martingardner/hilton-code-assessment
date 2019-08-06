import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import MainReducer from "../pages/index-reducer";

afterEach(cleanup);

describe("MainReducer component / index-reducer.js", () => {
  it("Main should render without crashing", () => {
    const component = render(<MainReducer />);
    expect(component).toBeTruthy();
  });

  describe("Local Storage tests", () => {
    //test by seeing if there is data in local storage after saving
    it("Main should save data to localstorage on submit", () => {
      const component = render(<MainReducer />);
      fireEvent(
        document.querySelector(".submit"),
        new MouseEvent("click", {
          bubbles: true,
          cancelable: true
        })
      );

      let roomLocalStorage = JSON.parse(localStorage.getItem("RoomsReducer"));
      expect(roomLocalStorage).toEqual(expect.anything());
      localStorage.clear();
    });

    it("Change Room 2 to checked, adultpop 2, childpop 2, those should populate on render", () => {
      const localStorageVals = {
        1: {
          order: 1,
          checkboxInput: false,
          checkboxChecked: true,
          adultpop: 1,
          childpop: 0,
          name: "Room 1"
        },
        2: {
          order: 2,
          checkboxInput: true,
          checkboxChecked: true,
          adultpop: 2,
          childpop: 2,
          name: "Room 2"
        },
        3: {
          order: 3,
          index: 2,
          checkboxInput: true,
          checkboxChecked: false,
          adultpop: 1,
          childpop: 0,
          name: "Room 3"
        },
        4: {
          order: 4,
          index: 3,
          checkboxInput: true,
          checkboxChecked: false,
          adultpop: 1,
          childpop: 0,
          name: "Room 4"
        }
      };

      localStorage.setItem("RoomsReducer", JSON.stringify(localStorageVals));
      const component = render(<MainReducer />);

      expect(document.querySelector("[name='room2_checkbox']").checked).toEqual(
        true
      );
      expect(document.querySelector("[name='room2_adultpop']").value).toEqual(
        "2"
      );
      expect(document.querySelector("[name='room2_childpop']").value).toEqual(
        "2"
      );
      localStorage.clear();
    });
  });
});
