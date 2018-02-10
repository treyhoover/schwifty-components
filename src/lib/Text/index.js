import 'tachyons/css/tachyons.min.css';
import styled from "styled-components";
// import classNames from "classnames";
import Element from "../Element";

const Text = styled(Element).attrs({
  // className: ({ ...props }) => classNames(),
})``;

Text.defaultProps = {
  as: "span",
};

export default Text;
