import 'tachyons/css/tachyons.min.css';
import styled from "styled-components";
import classNames from "classnames";
import PlainGroup from "./Plain";

const bg = color => color ? `bg-${color}` : "";

const Group = styled(PlainGroup).attrs({
  className: ({ skin, ...props }) => classNames(
    bg(skin),
  ),
})``;

Group.defaultProps = {

};

export default Group;
