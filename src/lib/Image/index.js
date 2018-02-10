import React from "react";
import styled from "styled-components";
// import classNames from "classnames";
import withTachyons from "../../hoc/withTachyons";
import 'tachyons/css/tachyons.min.css';

const Image = styled(({ as, children, skin, size, ...props }) => React
  .createElement(as, props, children))
  .attrs({
    // className: ({ skin, size, theme, ...props }) => classNames()
  })``;

Image.defaultProps = {
  as: "img",
};

export default withTachyons(Image);
