import React from "react";
import styled from "styled-components";
import classNames from "classnames";
import withTachyons from "../../hoc/withTachyons";

const Card = styled(({ as, children, skin, ...props }) => React
  .createElement(as, props, children))
  .attrs({
    className: ({ skin, theme, ...props }) => classNames(
      "dib",
      "tc",
      "ba b--black-20",
    ),
  })``;

Card.defaultProps = {
  as: "div",
};

export default withTachyons(Card);
