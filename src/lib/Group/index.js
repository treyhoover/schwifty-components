import React from "react";
import styled from "styled-components";
import classNames from "classnames";
import withTachyons from "../../hoc/withTachyons";
import { createColorizer } from "../../utils/color";
import 'tachyons/css/tachyons.min.css';

const color = createColorizer("Group");

const Group = styled(({ as, children, skin, size, ghost, inverted, ...props }) => React
  .createElement(as, props, children))
  .attrs({
    className: ({ skin, size, theme, ghost, inverted, ...props }) => classNames(
      { ba: !!skin && ghost }
    ),
  })`
    ${p => !!p.skin ? `
      background-color: ${p.ghost ? "transparent" : color(7)(p)};
      color: ${p.ghost ? color(7)(p) : color(0)(p)};
      border-color: ${p.ghost ? color(7)(p) : "transparent"};
    ` : ''}
  `;

Group.defaultProps = {
  as: "div",
  inverted: false,
  ghost: false,
  skin: "",
  size: "",
};

export default withTachyons(Group);
