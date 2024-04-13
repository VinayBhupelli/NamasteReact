import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    //   Why we need to use super(props) everytime
    super(props);
    // console.log(props);
    this.state = {
      count: 0,
      count2: 1,
      userInfo: {
        name: "dummy",
        location: "default location",
      },
    };
    // console.log("Child Constructor");
  }

  async componentDidMount() {
    // console.log("Child Did Mount");
    //   api call
    const data = await fetch("https://api.github.com/users/VinayBhupelli");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  //   componentDidMount() {
  //     this.timer = setInterval(() => {
  //       console.log("I am running!");
  //     }, 1000);
  //   }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.count !== prevState.count) {
      // value changed
    }
    console.log("Component Did Update!");
  }
  componentWillUnmount() {
    // clearInterval(this.timer);
    console.log("Component Will UnMount!");
    // This happens when we move to new page
    // we need to clear things up when we leave the page
    // Like stopping the setInterval functions
  }
  render() {
    // const { name } = this.props;
    const { count, count2 } = this.state;
    const { name, location, avatar_url } = this.state.userInfo;
    // console.log("Child render");
    return (
      <div className="user-card">
        <img src={avatar_url} alt="" />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @VinayBhupelli</h4>
        <h2>Count = {count}</h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 1,
            });
          }}
        >
          Increment Count
        </button>
        <h2>Count2 = {count2}</h2>
      </div>
    );
  }
}
export default UserClass;

/**
 * ------ MOUNTING ------
 * Constructor (dummy)
 * Render(dummy)
 *      <HTML Dummy>
 * Component Did Mount
 *      <API Call>
 *     <this.setState>
 * ----- UPDATE -------
 * render(API Data)
 * <HTML (new API data)>
 * Component Did Update
 */
