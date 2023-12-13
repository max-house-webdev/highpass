import React from "react";

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import renderer from "react-test-renderer";

import { Container } from "./Container";

describe("<Container />", () => {
  test("it should mount", () => {
    const Children = () => <div data-testid="children">children</div>;

    render(
      <Container>
        <Children />
      </Container>
    );

    const container = screen.getByTestId("Container");

    expect(container).toBeInTheDocument();

    const children = screen.getByTestId("children");
    expect(container).toContainElement(children);
    expect(children).toHaveTextContent("children");
  });
});

test("<Container /> renders correctly", () => {
  const tree = renderer
    .create(
      <Container>
        <div>children</div>
      </Container>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
