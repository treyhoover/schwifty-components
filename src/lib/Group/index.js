import React from "react";
import styled from "styled-components";
// import classNames from "classnames";
import withTachyons from "../../hoc/withTachyons";
import 'tachyons/css/tachyons.min.css';

const color = n => ({ theme, skin, inverted }) => inverted ?
  theme.Group.skins[skin][9 - n] :
  theme.Group.skins[skin][n];

const Group = styled(({ as, children, skin, size, inverted, ...props }) => React
  .createElement(as, props, children))
  .attrs({
    // className: ({ skin, size, theme, ...props }) => classNames(),
  })`
    ${p => !!p.skin ? `
      background-color: ${color(7)(p)};
      color: ${color(0)(p)};
    ` : ''}
  `;

Group.defaultProps = {
  as: "div",
  inverted: false,
  skin: "",
  size: "",
};

export default withTachyons(Group);
