import 'tachyons/css/tachyons.min.css';
import styled from "styled-components";
import classNames from "classnames";
import PlainView from "./Plain";

const View = styled(PlainView).attrs({
  className: ({ theme, ...props }) => classNames(

  ),
})``;

View.defaultProps = {

};

export default View;
