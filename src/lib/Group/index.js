import React from "react";
import styled from "styled-components";
import classNames from "classnames";
import withTachyons from "../../hoc/withTachyons";
import { createColorizer } from "../../utils/color";
import LoadingIcon from "react-icons/lib/fa/circle-o-notch";
import 'tachyons/css/tachyons.min.css';

const color = createColorizer("Group");

const Group = styled(({ as: T, children, skin, ghost, inverted, loading, relative, ...props }) => (
    <T {...props}>
      {loading && <LoadingIcon className="absolute spin" />}
      {loading ? <div className="o-0">{children}</div> : children}
    </T>
  ))
  .attrs({
    className: ({ skin, theme, ghost, inverted, loading, ...props }) => classNames(
      { ba: !!skin && ghost },
      { 'o-60 flex items-center justify-center': loading },
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
  loading: false,
  inverted: false,
  relative: true,
  ghost: false,
  skin: "",
};

export default withTachyons(Group);
