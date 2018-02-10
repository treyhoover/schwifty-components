import React from "react";
import styled from "styled-components";
import classNames from "classnames";
import withTachyons from "../../hoc/withTachyons";
import 'tachyons/css/tachyons.min.css';

const Button = styled(({ as, children, skin, size, ...props }) => React
  .createElement(as, props, children))
  .attrs({
    className: ({ skin, size, theme, ...props }) => classNames(
      'ph3 pv2',
      'pointer',
      'bn',
      'br2',
      'bg-animate',
      theme.Button.skins[skin],
      theme.Button.sizes[size],
    ),
  })``;

Button.defaultProps = {
  as: "button",
  skin: "gray",
  size: "md",
};

export default withTachyons(Button);
