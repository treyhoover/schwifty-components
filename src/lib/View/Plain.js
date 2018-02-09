import React from "react";
import withTachyons from "../../hoc/withTachyons";

const View = ({ as: T, ...props }) => (
  <T {...props} />
);

View.defaultProps = {
  as: "div",
};

export default withTachyons(View);
