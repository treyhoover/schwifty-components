import React from "react";
import withTachyons from "../../hoc/withTachyons";

const Element = ({ as: T, ...props }) => (
  <T {...props} />
);

Element.defaultProps = {
  as: "div",
};

export default withTachyons(Element);
