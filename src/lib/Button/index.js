import 'tachyons/css/tachyons.min.css';
import styled from "styled-components";
import classNames from "classnames";
import PlainButton from "./Plain";
import ButtonGroup from "./ButtonGroup";

const skins = {
  gray: "bg-gray hover-bg-dark-gray white",
  red: "bg-red hover-bg-dark-red white",
  orange: "bg-orange hover-bg-dark-orange white",
  yellow: "bg-yellow hover-bg-dark-yellow white",
  green: "bg-green hover-bg-dark-green white",
  blue: "bg-blue hover-bg-dark-blue white",
  black: "bg-black hover-bg-dark-gray white",
};

const sizes = {
  sm: "f7",
  md: "f6",
  lg: "f4",
};

const Button = styled(PlainButton).attrs({
  className: ({ skin, size, ...props }) => classNames(
    'ph3 pv2',
    'pointer',
    'bn',
    'br2',
    'bg-animate',
    skins[skin],
    sizes[size],
  ),
})``;

Button.defaultProps = {
  skin: "gray",
  size: "md",
};

Button.Group = ButtonGroup;

export default Button;
