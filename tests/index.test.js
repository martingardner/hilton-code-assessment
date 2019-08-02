import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import Main from "../pages/index";

afterEach(cleanup);

describe("Main component / index.js", () => {
  it("Main should render without crashing", () => {
    const component = render(<Main />);
    expect(component).toBeTruthy();
  });

  //test by seeing if there is data in local storage after saving
  it("Main should save data to localstorage on submit", () => {
    const component = render(<Main />);
    fireEvent(
      document.querySelector(".submit"),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true
      })
    );

    let roomLocalStorage = JSON.parse(localStorage.getItem("Rooms"));
    expect(roomLocalStorage).toEqual(expect.anything());
    localStorage.clear();
  });
});

describe("App Tests", () => {
  const checkbox4 = "[name='room4_checkbox']";
  const checkbox3 = "[name='room3_checkbox']";
  const checkbox2 = "[name='room2_checkbox']";

  describe("All checkboxes unchecked initially", () => {
    it("If Room 4 checkbox is checked, then Room 3 and Room 2 checkbox should be checked", () => {
      const component = render(<Main />);
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
      const component = render(<Main />);
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
      const component = render(<Main />);
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

  describe("Testing unclicking path if various checkboxes are initially checked", () => {
    it("Room 4 is unchecked, Room 3 and Room 2 should still be checked", () => {
      const component = render(<Main />);
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
  });

  it("Room 3 is unchecked, Room 4 should uncheck, and Room 2 should stay checked", () => {
    const component = render(<Main />);
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
    const component = render(<Main />);
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
