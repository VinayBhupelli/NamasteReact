import React from "react";
import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor");
  }
  componentDidMount() {
    // console.log("Parent Did Mount");
  }
  render() {
    // console.log("Parent render");
    return (
      <div>
        <h1>About Us</h1>
        <User name={"Vinay Bhupelli (Function)"} />

        {/* <UserClass name={"Vinay Bhupelli (Class)"} /> */}
      </div>
    );
  }
}

export default About;
