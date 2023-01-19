import React, { useState } from "react";
import Minus from './Minus'

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return(
    <>
    <button onClick={increment}>I have been clicked {count} times</button>
    <Minus />
    </>
  );
}

export default Counter;
