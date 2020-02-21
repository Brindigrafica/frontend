import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button, { Props as ButtonProps } from "./Button";

const setup = (
  attrs: ButtonProps,
  children: string,
): { button: HTMLElement } => {
  const utils = render(<Button {...attrs}>{children}</Button>);
  const button = utils.getByText(children);
  return {
    button,
    ...utils,
  };
};

test("it should call callback function", () => {
  const fn = jest.fn();
  const { button } = setup({ onClick: fn }, "Hello World");
  fireEvent.click(button);

  expect(fn).toHaveBeenCalled();
});
