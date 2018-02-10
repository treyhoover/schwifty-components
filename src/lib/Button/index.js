import React from "react";
import styled from "styled-components";
import classNames from "classnames";
import withTachyons from "../../hoc/withTachyons";
import withInverted from "../../hoc/withInverted";
import 'tachyons/css/tachyons.min.css';

const color = n => ({ theme, skin, inverted }) => inverted ?
  theme.Button.skins[skin][9 - n] :
  theme.Button.skins[skin][n];

const Button = styled(({ as, children, skin, size, inverted, ...props }) => React
  .createElement(as, props, children))
  .attrs({
    className: ({ skin, size, theme, ...props }) => classNames(
      'ph3 pv2',
      'pointer',
      'nowrap',
      'bn',
      'br2',
      'bg-animate',
      theme.Button.sizes[size],
    ),
  })`
    background-color: ${color(7)};
    color: ${color(0)};
    
    &:hover {
      background-color: ${color(8)};      
    }
    
    &:focus {
      background-color: ${color(8)};
    }
    
    &:active {
      background-color: ${color(8)};
    }
  `;

Button.defaultProps = {
  as: "button",
  skin: "gray",
  size: "md",
};

export default withTachyons(withInverted(Button));
