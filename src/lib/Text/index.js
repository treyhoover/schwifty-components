import React from "react";
import styled from "styled-components";
// import classNames from "classnames";
import withTachyons from "../../hoc/withTachyons";
import { color } from "../../utils/color";

const Text = styled(({ as, children, skin, ...props }) => React
  .createElement(as, props, children))
  .attrs({
    // className: ({ skin, theme, ...props }) => classNames(),
  })`
    ${p => !!p.skin && `
      color: ${color(0.8)(p)}    
    `}
  `;

Text.defaultProps = {
  as: "span",
};

export default withTachyons(Text);
