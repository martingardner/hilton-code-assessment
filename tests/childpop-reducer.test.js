import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import ChildpopReducer from "../components/childpop-reducer";

import MainReducer from "../pages/index-reducer";
import DataContext from "../context/DataContext";

afterEach(cleanup);

describe("Childpop Component", () => {
  it("childpop should exist", () => {
    const component = render(
      <MainReducer>
        <DataContext.Provider>
          <ChildpopReducer room={1} />
        </DataContext.Provider>
      </MainReducer>
    );

    expect(component).toBeTruthy();
  });

  it("childpop select inital value should equal '0'", () => {
    const component = render(
      <MainReducer>
        <DataContext.Provider>
          <ChildpopReducer room={1} />
        </DataContext.Provider>
      </MainReducer>
    );
    expect(document.querySelector("[name='room1_childpop']").value).toEqual(
      "0"
    );
  });

  it("childpop should have a value of 2 when set to 2 - test of dispatch", () => {
    const component = render(
      <MainReducer>
        <DataContext.Provider>
          <ChildpopReducer room={1} />
        </DataContext.Provider>
      </MainReducer>
    );

    fireEvent.change(document.querySelector("[name='room1_childpop']"), {
      target: { value: "2" }
    });

    expect(document.querySelector("[name='room1_childpop']").value).toEqual(
      "2"
    );
  });
});
