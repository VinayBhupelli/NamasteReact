import { useEffect, useState } from "react";

const User = (props) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("I am running!");
    }, 1000);
    console.log("useEffect: prints second");
    return () => {
      clearInterval(timer);
      console.log("Prints lasts");
    };
  }, [count]);
  console.log("Render: printed first");
  return (
    <div className="user-card">
      <h2>Name: {props.name}</h2>
      <h3>Location: Bhopal</h3>
      <h4>Contact: @VinayBhupelli</h4>
      <h2>Count = {count}</h2>
      <h2>Count2 = {count2}</h2>
    </div>
  );
};
export default User;
