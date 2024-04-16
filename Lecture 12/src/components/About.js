import React from "react";
import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

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
        <div>
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <User name={"Vinay Bhupelli (Function)"} />

        {/* <UserClass name={"Vinay Bhupelli (Class)"} /> */}
      </div>
    );
  }
}

export default About;
