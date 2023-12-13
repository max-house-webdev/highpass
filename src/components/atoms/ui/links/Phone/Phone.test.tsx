import React from "react";

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import renderer from "react-test-renderer";

import { Phone } from "./Phone";
import { formatPhoneNumber } from "./Phone";

describe("<Phone />", () => {
  test("it should mount", () => {
    render(<Phone />);

    const phone = screen.getByTestId("Phone");

    expect(phone).toBeInTheDocument();
    expect(phone).toHaveAttribute("href");
  });
});

test("<Phone /> renders correctly", () => {
  const tree = renderer.create(<Phone />).toJSON();
  expect(tree).toMatchSnapshot();
});

describe("formatPhoneNumber", () => {
  test("it shoulf format correctly", () => {
    const phoneNumberRegExp = /^\(\d{3,4}\) \d{2}-\d{3}-\d{3}$/;

    expect(formatPhoneNumber(12345678900)).toMatch(phoneNumberRegExp);
  });
});
