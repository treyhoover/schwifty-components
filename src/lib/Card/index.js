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

const Card = styled(({ as, children, skin, ...props }) => React
  .createElement(as, props, children))
  .attrs({
    className: ({ skin, theme, ...props }) => classNames(
      "dib",
      "tc",
      "ba b--black-20",
      skins[skin],
    ),
  })``;

Card.defaultProps = {
  as: "div",
};

export default withTachyons(Card);
