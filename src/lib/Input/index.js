import React from "react";
import styled from "styled-components";
import classNames from "classnames";
import withTachyons from "../../hoc/withTachyons";

const skins = {
  red: 'bg-red white',
  orange: 'bg-orange white',
  yellow: 'bg-yellow white',
  green: 'bg-green white',
  blue: 'bg-blue white',
  black: 'bg-black white',
  white: 'bg-white black',
  gray: 'bg-gray white',
};

const Input = styled(({ as, children, skin, inverted, ghost, ...props }) => React
  .createElement(as, props, children))
  .attrs({
    className: ({ skin, theme, ...props }) => classNames(
    'input-reset',
    'ba br2',
    'ph2 pv1',
    skins[skin],
  ),
})`
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
