import { useState } from "react";
import "./Home.css";
import Button from "../Components/Button";
function Home() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [inputName, setInputName] = useState("");
  function handleName(e) {
    setInputName(e.target.value);
  }
  function handleIncrement() {
    setCount(count + 1);
  }
  function handleReset() {
    setCount(0);
  }
  function handleDecrement() {
    setCount(count - 1);
  }
  function handleClick() {
    setName(inputName);
  }
  return (
    <div className="home-page">
      <h1>Welcome to Home Page</h1>
      <h2>Count: {count}</h2>
      <div className="buttons">
        <Button onClick={handleIncrement} children="Increment" />
        <Button onClick={handleDecrement} children="Decrement" />
        <Button onClick={handleReset} children="Reset" />
      </div>
      <div>
        <input
          type="text"
          onChange={handleName}
          placeholder="Enter Your Name"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleClick();
            }
          }}
        />
        <button onClick={handleClick}>Submit</button>
        <h2>Hii: {name}</h2>
      </div>
    </div>
  );
}

export default Home;
