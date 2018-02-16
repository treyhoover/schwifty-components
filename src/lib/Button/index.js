import React from "react";
import styled from "styled-components";
import classNames from "classnames";
import { withTachyons } from "reactyons";
import Loader from "react-icons/lib/fa/circle-o-notch";

const Button = withTachyons(styled(
  ({ as: T, children, circular, loading, bg, hoverBg, skin, ...props }) => (
    <T {...props}>
      {loading ? <Loader className="spin" /> : children}
    </T>
  ))
  .attrs({
    className: (p) => classNames(
      'relative',
      'nowrap',
      'tc',
      'bg-animate',
      p.circular ? 'pa2 truncate br-100' : 'ph3 pv2 br2',
      {
        'o-50': p.disabled || p.loading,
        'pointer': !p.disabled && !p.loading,
        'outline-0': p.disabled || p.loading,
      },
    ),
  })`
    ${({ circular }) => circular ? `
      width: 4em;
      height: 4em;
    ` : ''}
    
    ${({ disabled, loading }) => disabled || loading ? `
      pointer-events: none;
    ` : ''}
  `);

Button.defaultProps = {
  as: "button",
  circular: false,
  loading: false,
};

/* Skins */
Button.Default = p => <Button bn bg-gray white hover-bg-dark-gray {...p} />;
Button.Primary = p => <Button bn bg-blue white hover-bg-dark-blue {...p} />;
Button.Secondary = p => <Button bn bg-black white hover-bg-dark-gray {...p} />;
Button.Default.Ghost = p => <Button ba b--gray bg-transparent gray hover-bg-gray hover-white {...p} />;
Button.Primary.Ghost = p => <Button ba b--blue bg-transparent blue hover-bg-blue hover-white {...p} />;
Button.Secondary.Ghost = p => <Button ba b--black bg-transparent black hover-bg-black hover-white {...p} />;

export default Button;
