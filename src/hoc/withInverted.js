import React from "react";

export default (WrappedComponent) => class ComponentWithInverted extends React.Component {
  render() {

    return <WrappedComponent
      {...this.props}
    />;
  }
}
