import React from "react";
import styled from "styled-components";
// import classNames from "classnames";
import withTachyons from "../../hoc/withTachyons";
import { color } from "../../utils/color";
import 'tachyons/css/tachyons.min.css';

const Text = styled(({ as, children, skin, ...props }) => React
  .createElement(as, props, children))
  .attrs({
    // className: ({ skin, theme, ...props }) => classNames(),
  })`
    ${p => !!p.skin && `
      color: ${color(7)(p)}    
    `}
  `;

Text.defaultProps = {
  as: "span",
};

export default withTachyons(Text);
