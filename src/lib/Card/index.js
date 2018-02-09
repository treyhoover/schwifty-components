import 'tachyons/css/tachyons.min.css';
import styled from "styled-components";
import classNames from "classnames";
import PlainCard from "./Plain";

const bg = color => color ? `bg-${color}` : "";

const Card = styled(PlainCard).attrs({
  className: ({ skin, ...props }) => classNames(
    "dib",
    "tc",
    "ba b--black-20",
    bg(skin),
  ),
})``;

Card.defaultProps = {

};

export default Card;
