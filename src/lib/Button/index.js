import 'tachyons/css/tachyons.min.css';
import styled from "styled-components";
import classNames from "classnames";
import PlainButton from "./Plain";
import ButtonGroup from "./ButtonGroup";

const Button = styled(PlainButton).attrs({
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
  skin: "gray",
  size: "md",
};

Button.Group = ButtonGroup;

export default Button;
