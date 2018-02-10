import 'tachyons/css/tachyons.min.css';
import styled from "styled-components";
import classNames from "classnames";
import Element from "../Element";

const Button = styled(Element).attrs({
  className: ({ skin, size, theme, ...props }) => classNames(
    'ph3 pv2',
    'pointer',
    'bn',
    'br2',
    'bg-animate',
    theme.Button.skins[skin],
    theme.Button.sizes[size],
  ),
})``;

Button.defaultProps = {
  as: "button",
  skin: "gray",
  size: "md",
};

export default Button;
