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

const ListItem = styled(({ as, children, skin, ghost, inverted, ...props }) => React
  .createElement(as, props, children))
  .attrs({
    className: ({ skin, theme, ghost, inverted, ...props }) => classNames(
      { ba: !!skin && ghost },
      skins[skin],
    ),
  })``;

ListItem.defaultProps = {
  as: "li",
  inverted: false,
  ghost: false,
  skin: "",
};

export default withTachyons(ListItem);
