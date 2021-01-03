import React, { useState, useEffect } from "react";

const Timer = () => {
  const LIMIT = 60;

  const [timeLeft, setTimeLeft] = useState(LIMIT);

  const reset = () => {
    setTimeLeft(LIMIT);
  };

  const tick = () => {
    setTimeLeft((prevTime) => (prevTime === 0 ? LIMIT : prevTime - 1));
  };

  useEffect(() => {
    const timerId = setInterval(tick, 1000);

    // コンポーネントがアンマウント、もしくは副作用が際実行された時に呼ばれる
    // 上記で作成したタイマーは削除しない限り、延々と実行される
    // なので、コンポーネントがアンマウント、もしくは副作用が再度実行された時に clearInterval でタイマー削除
    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <>
      <p>time: {timeLeft}</p>
      <button onClick={reset}>Reset</button>
    </>
  );
};

export default Timer;
