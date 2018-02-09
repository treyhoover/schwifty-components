import 'tachyons/css/tachyons.min.css';
import styled from "styled-components";
import classNames from "classnames";
import PlainInput from "./Plain";

const Input = styled(PlainInput).attrs({
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
    color: ${({ skin }) => skin === "white" ? "black" : "white"};
    opacity: 0.5;
  }
`;

Input.defaultProps = {
  size: "md",
  skin: "white",
};

export default Input;
