import React from "react";
import styled from "styled-components";
import classNames from "classnames";
import withTachyons from "../../hoc/withTachyons";
import { createColorizer } from "../../utils/color";
import 'tachyons/css/tachyons.min.css';

const color = createColorizer("Button");

const Button = styled(({ as, children, skin, size, inverted, circular, ghost, ...props }) => React
  .createElement(as, props, children))
  .attrs({
    className: ({ skin, size, theme, circular, ...props }) => classNames(
      circular ? 'pa2 truncate br-100' : 'ph3 pv2 br2',
      'pointer',
      'nowrap',
      'tc',
      'ba',
      'bg-animate',
      theme.Button.sizes[size],
    ),
  })`
    ${({ circular }) => circular ? `
      width: 4em;
      height: 4em;
    ` : ''}  
  
    background-color: ${p => p.ghost ? "transparent" : color(7)(p)};
    color: ${p => p.ghost ? color(7)(p) : color(0)(p)};
    border-color: ${p => p.ghost ? color(7)(p) : "transparent"};
    
    &:hover {
      background-color: ${color(8)};
      ${p => p.ghost ? `
        color: ${color(0)(p)}
      ` : ''}      
    }
    
    &:focus {
      background-color: ${color(8)};
      ${p => p.ghost ? `
        color: ${color(0)(p)}
      ` : ''}
    }
    
    &:active {
      background-color: ${color(8)};
      ${p => p.ghost ? `
        color: ${color(0)(p)}
      ` : ''}
    }
  `;

Button.defaultProps = {
  as: "button",
  skin: "gray",
  size: "md",
  inverted: false,
  circular: false,
  ghost: false,
};

export default withTachyons(Button);
