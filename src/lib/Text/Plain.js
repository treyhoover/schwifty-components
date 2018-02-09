import React from "react";
import withTachyons from "../../hoc/withTachyons";

const Text = ({ as: T, ...props }) => (
  <T {...props} />
);

Text.defaultProps = {
  as: "span",
};

export default withTachyons(Text);
