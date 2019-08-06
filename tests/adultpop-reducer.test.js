import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import AdultpopReducer from "../components/adultpop-reducer";

import MainReducer from "../pages/index-reducer";
import RoomsReducer from "../reducer/RoomsReducer";
import DataContext from "../context/DataContext";

afterEach(cleanup);

describe("Adultpop component", () => {
  it("Adultpop should exist", () => {
    const component = render(
      <MainReducer>
        <DataContext.Provider>
          <AdultpopReducer room={1} />
        </DataContext.Provider>
      </MainReducer>
    );
    expect(component).toBeTruthy();
  });

  it("Adultpop select should have name of room1_childpop when given room 1", () => {
    const component = render(
      <MainReducer>
        <DataContext.Provider>
          <AdultpopReducer room={1} />
        </DataContext.Provider>
      </MainReducer>
    );
    expect(document.querySelector("select").name).toEqual("room1_adultpop");
  });

  it("Adultpop select inital value should equal '1'", () => {
    const component = render(
      <MainReducer>
        <DataContext.Provider>
          <AdultpopReducer room={1} />
        </DataContext.Provider>
      </MainReducer>
    );
    expect(document.querySelector("select").value).toEqual("1");
  });

  it("Adultpop should have a value of 2 when set to 2 - test of dispatch", () => {
    const component = render(
      <MainReducer>
        <DataContext.Provider>
          <AdultpopReducer room={1} />
        </DataContext.Provider>
      </MainReducer>
    );

    fireEvent.change(document.querySelector("[name='room1_adultpop']"), {
      target: { value: "2" }
    });

    expect(document.querySelector("[name='room1_adultpop']").value).toEqual(
      "2"
    );
  });
});
