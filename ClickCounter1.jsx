
import React, { useState } from 'react';

const ClickCounter1 = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCountByTwo = () => {
    setCount(count - 2);
  };

  return (
    <div>
      <p>Clicked {count} times</p>
      <button onClick={increaseCount}>Increase Count</button>
      <button onClick={decreaseCountByTwo}>Decrease Count by 2</button>
    </div>
  );
};

export default ClickCounter1;
