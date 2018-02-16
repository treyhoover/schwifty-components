import React from "react";
import styled from "styled-components";
import classNames from "classnames";
import withTachyons from "../../hoc/withTachyons";
import LoadingIcon from "react-icons/lib/fa/circle-o-notch";

const Group = withTachyons(styled(({ as: T, children, skin, ghost, inverted, loading, relative, ...props }) => (
  <T {...props}>
    {loading && <LoadingIcon className="absolute spin" />}
    {loading ? <div className="o-0">{children}</div> : children}
  </T>
))
  .attrs({
    className: (p) => classNames(
      {
        'o-60 flex items-center justify-center': p.loading,
        'ba': p.ghost,
      },
    ),
  })``);

Group.defaultProps = {
  as: "div",
  loading: false,
  inverted: false,
  relative: true,
  ghost: false,
};

/* Skins */
Group.Default = p => <Group bn bg-light-gray black {...p} />;
Group.Primary = p => <Group bn bg-light-blue black {...p} />;
Group.Secondary = p => <Group bn bg-moon-gray black {...p} />;
Group.Default.Ghost = p => <Group ba b--black bg-transparent black {...p} />;
Group.Primary.Ghost = p => <Group ba b--blue bg-transparent blue {...p} />;
Group.Secondary.Ghost = p => <Group ba b--gray bg-transparent gray {...p} />;

export default Group;
