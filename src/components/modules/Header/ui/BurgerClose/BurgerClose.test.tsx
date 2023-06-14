import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BurgerClose } from "./BurgerClose";

describe("<BurgerClose />", () => {
  test("it should mount", () => {
    render(<BurgerClose onClick={() => {}} />);

    const burgerClose = screen.getByTestId("BurgerClose");

    expect(burgerClose).toBeInTheDocument();
  });
});
