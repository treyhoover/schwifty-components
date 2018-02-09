import 'tachyons/css/tachyons.min.css';
import styled from "styled-components";
import classNames from "classnames";
import PlainInput from "./Plain";

const Input = styled(PlainInput).attrs({
  className: ({ skin, size, theme, ...props }) => classNames(
    'input-reset',
    'db di-ns',
    'w-100 w-auto-ns',
    'bg-white',
    'ba b--gray br2',
    'ph2 pv1',
    theme.Input.sizes[size],
  ),
})``;

Input.defaultProps = {
  size: "md",
};

export default Input;
