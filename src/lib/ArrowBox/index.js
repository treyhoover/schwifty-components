import React from "react";
import styled from "styled-components";
import classNames from "classnames";
import withTachyons from "../../hoc/withTachyons";
import { color } from "../../utils/color";
import Group from "../Group";

const margin = pos => {
  switch (pos) {
    case "top":
      return "left";
    case "right":
      return "top";
    case "left":
      return "top";
    case "bottom":
    default:
      return "left";
  }
};

const opposite = (side) => {
  switch (side) {
    case "top":
      return "bottom";
    case "right":
      return "left";
    case "bottom":
      return "top";
    case "left":
    default:
      return "right";
  }
};

const position = ({ position }) => {
  switch (position) {
    case "top":
      return "bottom: 100%; left: 50%;";
    case "right":
      return "left: 100%; top: 50%;";
    case "left":
      return "right: 100%; top: 50%;";
    case "bottom":
    default:
      return "top: 100%; left: 50%;"
  }
};

const capitalize = (str = "") => str[0].toUpperCase() + str.slice(1);

const borderColor = color(1);
const backgroundColor = color(0.8);
const foregroundColor = color(0);

const marginKey = position => `margin${capitalize(position)}`;

const ArrowBox = styled(({ as, children, skin, ghost, inverted, loading, relative, arrowSize, borderWidth, position, ...props }) => (
  <span style={{ display: "inline-block", [marginKey(position)]: arrowSize }}>
    <Group {...props}>
      {children}
    </Group>
  </span>
))
  .attrs({
    className: ({ skin, theme, ghost, inverted, loading, arrowSize, borderWidth, ...props }) => classNames(
      'dib',
      'relative',
      'ph3 pv2',
    ),
  })`
    background: ${backgroundColor};
    border: ${p => p.borderWidth}px solid ${borderColor};
    color: ${foregroundColor};
      
    &:after, &:before {
      ${position}
      border: solid transparent;
      content: " ";
      height: 0;
      width: 0;
      position: absolute;
      pointer-events: none;
    }
    
    &:after {
      border-${p => opposite(p.position)}-color: ${backgroundColor};
      ${p => `border-width: ${p.arrowSize}px;`}
      ${p => `margin-${margin(p.position)}: -${p.arrowSize}px;`}
    }
    &:before {
      border-${p => opposite(p.position)}-color: ${borderColor};
      ${p => `border-width: ${p.arrowSize + p.borderWidth * 2 - 1}px;`}
      ${p => `margin-${margin(p.position)}: -${p.arrowSize + p.borderWidth * 2 - 1}px;`}
    }
  `;

ArrowBox.defaultProps = {
  as: "div",
  position: "bottom",
  arrowSize: 8,
  borderWidth: 2,
  loading: false,
  inverted: false,
  relative: true,
  ghost: false,
  skin: "gray",
};

export default withTachyons(ArrowBox);
