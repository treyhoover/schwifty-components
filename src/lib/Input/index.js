import 'tachyons/css/tachyons.min.css';
import styled from "styled-components";
import classNames from "classnames";
import Element from "../Element";

const Input = styled(Element).attrs({
  className: ({ skin, size, theme, ...props }) => classNames(
    'input-reset',
    'db di-ns',
    'w-100 w-auto-ns',
    'br2',
    'ph2 pv1',
    theme.Input.sizes[size],
    theme.Input.skins[skin],
  ),
})`
  &::placeholder {
    color: currentColor;
    opacity: 0.5;
  }
`;

Input.defaultProps = {
  as: "input",
  size: "md",
  skin: "white",
};

export default Input;
