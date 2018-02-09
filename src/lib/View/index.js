import 'tachyons/css/tachyons.min.css';
import styled from "styled-components";
import classNames from "classnames";
import PlainView from "./Plain";

const bg = color => color ? `bg-${color}` : "";

const View = styled(PlainView).attrs({
  className: ({ skin, ...props }) => classNames(
    bg(skin),
  ),
})``;

View.defaultProps = {

};

export default View;
