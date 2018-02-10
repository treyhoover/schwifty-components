import React from "react";

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
    document.body.classList.remove(this.props.bodyClass);
  }

  setBodyClass(bodyClass) {
    document.body.classList.add(bodyClass);
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

export default Page;
