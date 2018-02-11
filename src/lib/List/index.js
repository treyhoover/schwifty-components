import React from "react";
import styled from "styled-components";
import classNames from "classnames";
import withTachyons from "../../hoc/withTachyons";
import ListItem from "./ListItem";
import { createColorizer } from "../../utils/color";
import 'tachyons/css/tachyons.min.css';

const color = createColorizer("List");

const List = styled(({ as, children, skin, ghost, inverted, ...props }) => React
  .createElement(as, props, children))
  .attrs({
    className: ({ skin, theme, ghost, inverted, ...props }) => classNames(
      { ba: !!skin && ghost },
      'list',
    ),
  })`
    ${p => !!p.skin ? `
      background-color: ${p.ghost ? "transparent" : color(7)(p)};
      color: ${p.ghost ? color(7)(p) : color(0)(p)};
      border-color: ${p.ghost ? color(7)(p) : "transparent"};
    ` : ''}
  `;

List.defaultProps = {
  as: "ul",
  inverted: false,
  ghost: false,
  skin: "",
};

const ListWithTachyons = withTachyons(List);

ListWithTachyons.Item = ListItem;

export default ListWithTachyons;
