import React from "react";
import { noop } from "lodash/fp";

export type Props = {
  onClick: () => void;
};

const Button: React.FC<Props> = ({ onClick, children }) => (
  <button onClick={onClick}>{children}</button>
);

Button.defaultProps = {
  onClick: noop,
};

export default Button;
