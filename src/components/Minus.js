import React, { useState } from "react";

function Minus() {
    const [minus, setCount] = useState(100);
  
    function decrement() {
      setCount(minus - 1);
    }
  
    return(
      <>
      <button onClick={decrement}> amount {minus}</button>
      <Minus />
      </>
    );
}

export default Minus;