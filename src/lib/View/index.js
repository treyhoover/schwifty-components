import 'tachyons/css/tachyons.min.css';
import styled from "styled-components";
import classNames from "classnames";
import Element from "../Element";

const View = styled(Element).attrs({
  className: ({ theme, ...props }) => classNames(

  ),
})``;

View.defaultProps = {
  as: "div",
};

export default View;
