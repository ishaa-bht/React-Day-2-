import React, { useState } from "react";
const ClickCounter = (props) => {
    const [count, setCount] = useState(1);
    const [buttonClicked, setButtonClicked] = useState(false);
  
    const increment = () => {
      setCount(count + 1);
      
  
    };
  
    const decrement = () => {
        const decreasedCount = count - 2 >= 0 ? count - 2 : 0;
      setCount(decreasedCount);
     
     
    };
    
  
    return (
      <div>
        <h2>{props.title}</h2>
  
  
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
  
        
  
      </div>
    );
  };
  
  export default ClickCounter;