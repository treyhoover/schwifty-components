import 'tachyons/css/tachyons.min.css';
import styled from "styled-components";
// import classNames from "classnames";
import PlainText from "./Plain";

const Text = styled(PlainText).attrs({
  // className: ({ ...props }) => classNames(),
})``;

Text.defaultProps = {

};

export default Text;
