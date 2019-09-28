import React, { Component } from "react";
import Header from "./Header";
import Body from "./Body"
import Footer from "./Footer"
import "./container.css"

class Container extends Component {
  state = {
    count:0,
    name:<p>mankind</p>
  };
  render() {
    return (
      <React.Fragment>
        {/* <Header />
        <Body/>
        <Footer /> */}
        <p>Hello world</p>
        <button className="button">{this.state.count}</button>
      </React.Fragment>
    );
  }
}

export default Container;
