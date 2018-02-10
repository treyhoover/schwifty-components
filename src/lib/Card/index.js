import 'tachyons/css/tachyons.min.css';
import styled from "styled-components";
import classNames from "classnames";
import Element from "../Element";

const Card = styled(Element).attrs({
  className: ({ ...props }) => classNames(
    "dib",
    "tc",
    "ba b--black-20",
  ),
})``;

Card.defaultProps = {
  as: "div",
};

export default Card;
