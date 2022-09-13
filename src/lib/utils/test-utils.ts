import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { ReactElement } from "react";

interface RenderOptions {
  children: React.ReactNode;
}

const Renderer = ({ children }: RenderOptions) => {
  return children;
};

const customRender = (ui: ReactElement, options?: any) =>
  render(ui, {
    wrapper: Renderer,
    ...options,
  });

export * from "@testing-library/react";
export { customRender as render };
