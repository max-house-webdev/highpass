import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BurgerOpen } from "./BurgerOpen";

describe("<BurgerOpen />", () => {
  test("it should mount", () => {
    render(<BurgerOpen onClick={() => {}} />);

    const burgerOpen = screen.getByTestId("BurgerOpen");

    expect(burgerOpen).toBeInTheDocument();
  });
});
