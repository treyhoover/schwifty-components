import React from "react";
import withTachyons from "../../hoc/withTachyons";

const Group = ({ as: T, ...props }) => (
  <T {...props} />
);

Group.defaultProps = {
  as: "div",
};

export default withTachyons(Group);
