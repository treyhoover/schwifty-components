import React from "react";
import withTachyons from "../../hoc/withTachyons";

class Page extends React.Component {
  componentDidMount() {
    this.setBodyClass(this.props.bodyClass);
  }

  componentWillReceiveProps(nextProps) {
    const bodyClassChanged = nextProps.bodyClass !== this.props.bodyClass;

    if (bodyClassChanged) {
      this.setBodyClass(nextProps.bodyClass);
    }
  }

  componentWillUnmount() {
    const classes = this.props.bodyClass.split(" ");

    classes.forEach(c => {
      document.body.classList.remove(c);
    });
  }

  setBodyClass(bodyClass) {
    const classes = bodyClass.split(" ");

    classes.forEach(c => {
      document.body.classList.add(c);
    });
  }

  render() {
    const { as: T, bodyClass, ...props } = this.props;

    return (
      <T {...props} />
    );
  }
}

Page.defaultProps = {
  as: "div",
  bodyClass: "",
};

export default withTachyons(Page);
