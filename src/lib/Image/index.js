import 'tachyons/css/tachyons.min.css';
import styled from "styled-components";
// import classNames from "classnames";
import PlainImage from "./Plain";

const Image = styled(PlainImage).attrs({
  // className: ({ ...props }) => classNames(),
})``;

Image.defaultProps = {

};

export default Image;
