import React from "react";
import styled from "styled-components";
import classNames from "classnames";
import withTachyons from "../../hoc/withTachyons";
import 'tachyons/css/tachyons.min.css';

const color = n => ({ theme, skin }) => theme.Button.skins[skin][n];

const Button = styled(({ as, children, skin, size, ...props }) => React
  .createElement(as, props, children))
  .attrs({
    className: ({ skin, size, theme, ...props }) => classNames(
      'ph3 pv2',
      'pointer',
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

export default withTachyons(Button);
