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

const Text = styled(({ as, children, skin, ...props }) => React
  .createElement(as, props, children))
  .attrs({
    className: ({ skin, theme, ...props }) => classNames(
      skins[skin],
    ),
  })``;

Text.defaultProps = {
  as: "span",
};

export default withTachyons(Text);
