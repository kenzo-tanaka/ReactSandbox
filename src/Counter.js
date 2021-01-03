import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  // 副作用はコンポーネントの描画後に実行されるので、下記のDOMの操作もできる
  // コンポーネントは state が更新されるたびに再描画されるので、下記処理も count が切り替わると実行される
  useEffect(() => {
    document.getElementById("effect").innerHTML = `Count is ${count}`;
  });

  // 空の配列を第二引数として渡すと、処理は一度だけ実行される
  useEffect(() => {
    alert("このアラートは一回だけ実行されます");
  }, []);

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Add</button>
      {/* setCountに関数を渡す形 */}
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Add with function.
      </button>
      <p id="effect"></p>
    </>
  );
};

export default Counter;
