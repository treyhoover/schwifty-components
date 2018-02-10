import 'tachyons/css/tachyons.min.css';
import styled from "styled-components";
// import classNames from "classnames";
import Element from "../Element";

const Image = styled(Element).attrs({
  // className: ({ ...props }) => classNames(),
})``;

Image.defaultProps = {
  as: "img",
};

export default Image;
