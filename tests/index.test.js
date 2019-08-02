import React from "react";
import { render, cleanup } from "@testing-library/react";
import Main from "../pages/index";

describe("Main component / index.js", () => {
  it("Main should render without crashing", () => {
    const component = render(<Main />);
    expect(component).toBeTruthy();
  });
});
