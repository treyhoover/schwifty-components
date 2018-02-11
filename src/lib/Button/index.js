import React from "react";
import styled from "styled-components";
import classNames from "classnames";
import withTachyons from "../../hoc/withTachyons";
import 'tachyons/css/tachyons.min.css';

const color = n => ({ theme, skin, inverted }) => inverted ?
  theme.Button.skins[skin][9 - n] :
  theme.Button.skins[skin][n];

const Button = styled(({ as, children, skin, size, inverted, circular, ...props }) => React
  .createElement(as, props, children))
  .attrs({
    className: ({ skin, size, theme, circular, ...props }) => classNames(
      circular ? 'pa2 truncate br-100' : 'ph3 pv2 br2',
      'pointer',
      'nowrap',
      'tc',
      'bn',
      'bg-animate',
      theme.Button.sizes[size],
    ),
  })`
    ${({ circular }) => circular ? `
      width: 4em;
      height: 4em;
    ` : ''}  
  
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
  inverted: false,
  circular: false,
};

export default withTachyons(Button);
