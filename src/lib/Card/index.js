import 'tachyons/css/tachyons.min.css';
import styled from "styled-components";
import classNames from "classnames";
import PlainCard from "./Plain";

const Card = styled(PlainCard).attrs({
  className: ({ ...props }) => classNames(
    "dib",
    "tc",
    "ba b--black-20",
  ),
})``;

Card.defaultProps = {

};

export default Card;
