import React from "react";

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import renderer from "react-test-renderer";

import { Hashtag } from "./Hashtag";

describe("<Hashtag />", () => {
  test("it should mount", () => {
    render(<Hashtag textContent={"hashtag"} />);

    const hashtag = screen.getByTestId("hashtag");

    expect(hashtag).toBeInTheDocument();
    expect(hashtag).toHaveTextContent(/#\w/);
  });
});

test("<LearnMore /> renders correctly", () => {
  const tree = renderer.create(<Hashtag textContent={"hashtag"} />).toJSON();
  expect(tree).toMatchSnapshot();
});
