import React from "react";
import styled from "styled-components";
// import classNames from "classnames";
import withTachyons from "../../hoc/withTachyons";
import 'tachyons/css/tachyons.min.css';

const Group = styled(({ as, children, skin, size, ...props }) => React
  .createElement(as, props, children))
  .attrs({
    // className: ({ skin, size, theme, ...props }) => classNames(),
  })``;

Group.defaultProps = {
  as: "div",
  skin: "",
  size: "",
};

export default withTachyons(Group);
