import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import renderer from "react-test-renderer";

import { Search } from "./Search";

describe("<Search />", () => {
  test("it should mount", () => {
    render(<Search />);

    const search = screen.getByTestId("Search");

    expect(search).toBeInTheDocument();
  });
});

test("<Search /> renders correctly", () => {
  const tree = renderer.create(<Search />).toJSON();
  expect(tree).toMatchSnapshot();
});
