import React from "react";
import styled from "styled-components";
import classNames from "classnames";
import Loader from "react-icons/lib/fa/circle-o-notch";
import withTachyons from "../../hoc/withTachyons";
import { createColorizer } from "../../utils/color";
import 'tachyons/css/tachyons.min.css';

const color = createColorizer("Button");

const Button = styled(({ as, children, skin, inverted, circular, ghost, loading, disabled, ...props }) => React
  .createElement(as, {
    ...props,
    disabled: disabled || loading,
  }, <React.Fragment>
    {loading &&
    <span
      className="absolute"
      style={{ left: "50%", transform: "translateX(-50%)" }}
    >
      <Loader className="spin" />
    </span>}
    <span className={loading ? "o-0" : "o-100"}>{children}</span>
  </React.Fragment>))
  .attrs({
    className: ({ skin, theme, circular, disabled, loading, ...props }) => classNames(
      circular ? 'pa2 truncate br-100' : 'ph3 pv2 br2',
      { 'o-50': disabled || loading },
      { 'pointer': !disabled && !loading },
      { 'outline-0': disabled || loading },
      'relative',
      'nowrap',
      'tc',
      'ba',
      'bg-animate',
    ),
  })`
    ${({ circular }) => circular ? `
      width: 4em;
      height: 4em;
    ` : ''}  
  
    background-color: ${p => p.ghost ? "transparent" : color(7)(p)};
    color: ${p => p.ghost ? color(7)(p) : color(0)(p)};
    border-color: ${p => p.ghost ? color(7)(p) : "transparent"};
    
    &:not([disabled]):hover {
      background-color: ${color(8)};
      ${p => p.ghost ? `
        color: ${color(0)(p)}
      ` : ''}      
    }
    
    &:not([disabled]):focus {
      background-color: ${color(8)};
      ${p => p.ghost ? `
        color: ${color(0)(p)}
      ` : ''}
    }
    
    &:not([disabled]):active {
      background-color: ${color(8)};
      ${p => p.ghost ? `
        color: ${color(0)(p)}
      ` : ''}
    }
  `;

Button.defaultProps = {
  as: "button",
  skin: "gray",
  inverted: false,
  circular: false,
  loading: false,
  ghost: false,
};

export default withTachyons(Button);
