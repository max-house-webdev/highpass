import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Primary } from "./Primary";

describe("<Primary />", () => {
  test("it should mount", () => {
    render(<Primary textContent="Primary" />);

    const primary = screen.getByTestId("Primary");

    expect(primary).toBeInTheDocument();
  });
});
