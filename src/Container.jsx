import React, { Component } from "react";
import Header from "./Header";
import Body from "./Body"
import Footer from "./Footer"
import "./container.css"

class Container extends Component {
  state = {
    count:0,
   box:"box"
  };

  handleIncrement=()=>{
this.setState({count:this.state.count + 1})
console.log(this.state.count)


  };

  handleDiv=()=>{
    if (this.state.count<3)
    {
      return "box"
    }
    if(this.state.count>=3)
    {return "cake"}
   
  }
  render() {
    return (
      <React.Fragment>
        {/* <Header />
        <Body/>
        <Footer /> */}
        <p>Hello world</p>
        <button className="button" onClick={this.handleIncrement}>{this.state.count}</button>
        <div className={this.handleDiv()} >

        </div>
      </React.Fragment>
    );
  }
}

export default Container;
