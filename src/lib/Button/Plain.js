import React from "react";
import withTachyons from "../../hoc/withTachyons";

const Button = ({ as: T, skin, size, ...props }) => (
  <T {...props} />
);

Button.defaultProps = {
  as: "button",
};

export default withTachyons(Button);
