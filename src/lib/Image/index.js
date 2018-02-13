import React from "react";
import styled from "styled-components";
// import classNames from "classnames";
import withTachyons from "../../hoc/withTachyons";

const Image = styled(({ as, children, skin, ...props }) => React
  .createElement(as, props, children))
  .attrs({
    // className: ({ skin, theme, ...props }) => classNames()
  })``;

Image.defaultProps = {
  as: "img",
};

export default withTachyons(Image);
