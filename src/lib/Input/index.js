import React from "react";
import styled from "styled-components";
import classNames from "classnames";
import withTachyons from "../../hoc/withTachyons";
import { createColorizer } from "../../utils/color";
import 'tachyons/css/tachyons.min.css';

const color = createColorizer("Input");

const Input = styled(({ as, children, skin, ...props }) => React
  .createElement(as, props, children))
  .attrs({
    className: ({ skin, theme, ...props }) => classNames(
    'input-reset',
    'ba br2',
    'ph2 pv1',
  ),
})`
  background-color: ${color(0)};
  color: ${color(6)};
  border-color: ${color(7)};

  &::placeholder {
    color: currentColor;
    opacity: 0.5;
  }
`;

Input.defaultProps = {
  as: "input",
  skin: "white",
};

export default withTachyons(Input);
