import React from "react";

import { render, screen } from "@testing-library/react";

import TestButton from "./TestButton";

describe("TestButton", () => {
  it("renders children", () => {
    render(<TestButton>hi</TestButton>);
    expect(screen.getByText("hi")).toBeVisible();
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<TestButton>hi</TestButton>);
    expect(asFragment()).toMatchSnapshot();
  });
});
