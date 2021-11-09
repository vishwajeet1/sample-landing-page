import React, { Component, ComponentType } from "react";

export default function withWindowDimensions<P extends object>(
  WrappedComponent: ComponentType<P>
) {
  // eslint-disable-next-line react/display-name
  return class extends Component<P> {
    state = { width: 0, height: 0 };

    componentDidMount() {
      this.updateWindowDimensions();
      window.addEventListener("resize", this.updateWindowDimensions);
    }

    componentWillUnmount() {
      window.removeEventListener("resize", this.updateWindowDimensions);
    }

    updateWindowDimensions = () => {
      this.setState({ width: window.innerWidth, height: window.innerHeight });
    };

    render() {
      return (
        <WrappedComponent
          {...this.props}
          windowWidth={this.state.width}
          windowHeight={this.state.height}
          isMobileSized={this.state.width < 700}
          isLargeSized={this.state.width > 1535}
        />
      );
    }
  };
}
