import React from "react";
import withTachyons from "../../hoc/withTachyons";

const Image = ({ as: T, skin, size, ...props }) => (
  <T {...props} />
);

Image.defaultProps = {
  as: "img",
};

export default withTachyons(Image);
