import React from "react";
import { noop } from "lodash/fp";

export type Props = {
  onClick?: () => void;
  disabled?: boolean;
};

const Button: React.FC<Props> = ({ onClick, disabled, children }) => (
  <button disabled={disabled} onClick={onClick}>
    {children}
  </button>
);

Button.defaultProps = {
  onClick: noop,
  disabled: false,
};

export default Button;
