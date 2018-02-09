import React from "react";
import withTachyons from "../../hoc/withTachyons";

const Input = ({ as: T, ...props }) => (
  <T {...props} />
);

Input.defaultProps = {
  as: "input",
};

export default withTachyons(Input);
