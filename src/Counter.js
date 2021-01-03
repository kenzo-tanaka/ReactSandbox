import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Add</button>
      {/* setCountに関数を渡す形 */}
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Add with function.
      </button>
    </>
  );
};

export default Counter;
