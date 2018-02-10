import React from "react";
import styled from "styled-components";
import classNames from "classnames";
import withTachyons from "../../hoc/withTachyons";
import 'tachyons/css/tachyons.min.css';

const Card = styled(({ as, children, skin, size, ...props }) => React
  .createElement(as, props, children))
  .attrs({
    className: ({ skin, size, theme, ...props }) => classNames(
      "dib",
      "tc",
      "ba b--black-20",
    ),
  })``;

Card.defaultProps = {
  as: "div",
};

export default withTachyons(Card);
