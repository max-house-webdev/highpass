import React from "react";

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import renderer from "react-test-renderer";

import { TemplateName } from "./TemplateName";

describe("<TemplateName />", () => {
  test("it should mount", () => {
    render(<TemplateName />);

    const templateName = screen.getByTestId("TemplateName");

    expect(templateName).toBeInTheDocument();
  });
});

test("<TemplateName /> renders correctly", () => {
  const tree = renderer.create(<TemplateName />).toJSON();
  expect(tree).toMatchSnapshot();
});
