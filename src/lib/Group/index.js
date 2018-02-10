import 'tachyons/css/tachyons.min.css';
import styled from "styled-components";
import classNames from "classnames";
import Element from "../Element";

const Group = styled(Element).attrs({
  className: ({ ...props }) => classNames(
    
  ),
})``;

Group.defaultProps = {
  as: "div",
};

export default Group;
