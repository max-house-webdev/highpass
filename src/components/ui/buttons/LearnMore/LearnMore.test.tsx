import React from "react";

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import renderer from "react-test-renderer";

import { LearnMore } from "./LearnMore";

describe("<LearnMore />", () => {
  test("it should mount", () => {
    render(<LearnMore textContent={"learn more"} />);

    const learnMore = screen.getByTestId("LearnMore");

    expect(learnMore).toBeInTheDocument();
    expect(learnMore).toHaveTextContent("learn more");
  });
});

test("<LearnMore /> renders correctly", () => {
  const tree = renderer
    .create(<LearnMore textContent={"learn more"} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
