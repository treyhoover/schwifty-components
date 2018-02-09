import 'tachyons/css/tachyons.min.css';
import styled from "styled-components";
import classNames from "classnames";
import PlainInput from "./Plain";

const sizes = {
  sm: "f7",
  md: "f6",
  lg: "f4",
};

const Input = styled(PlainInput).attrs({
  className: ({ skin, size, ...props }) => classNames(
    'input-reset',
    'db di-ns',
    'w-100 w-auto-ns',
    'bg-white',
    'ba b--gray br2',
    'ph2 pv1',
    sizes[size],
  ),
})``;

Input.defaultProps = {
  size: "md",
};

export default Input;
