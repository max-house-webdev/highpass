import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { LearnMore } from "./LearnMore";

describe("<LearnMore />", () => {
  test("it should mount", () => {
    render(<LearnMore />);

    const learnMore = screen.getByTestId("LearnMore");

    expect(learnMore).toBeInTheDocument();
  });
});
