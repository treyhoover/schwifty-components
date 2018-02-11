import React from "react";
import styled from "styled-components";
import classNames from "classnames";
import withTachyons from "../../hoc/withTachyons";
import { createColorizer } from "../../utils/color";
import 'tachyons/css/tachyons.min.css';

const color = createColorizer("Input");

const Input = styled(({ as, children, skin, inverted, ghost, ...props }) => React
  .createElement(as, props, children))
  .attrs({
    className: ({ skin, theme, ...props }) => classNames(
    'input-reset',
    'ba br2',
    'ph2 pv1',
  ),
})`
  background-color: ${p => p.ghost ? "transparent" : color(2)(p)};
  color: ${p => p.ghost ? color(7)(p) : color(9)(p)};
  border-color: ${color(7)};

  &::placeholder {
    color: currentColor;
    opacity: 0.5;
  }
`;

Input.defaultProps = {
  as: "input",
  skin: "white",
  inverted: false,
  ghost: false,
};

export default withTachyons(Input);
