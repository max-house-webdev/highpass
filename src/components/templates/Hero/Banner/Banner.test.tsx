import React from "react";

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import renderer from "react-test-renderer";

import { Banner } from "./Banner";

describe("<Banner />", () => {
  test("it should mount", () => {
    render(<Banner />);

    const banner = screen.getByTestId("Banner");

    expect(banner).toBeInTheDocument();
  });
});

test("<Banner /> renders correctly", () => {
  const tree = renderer.create(<Banner />).toJSON();
  expect(tree).toMatchSnapshot();
});
