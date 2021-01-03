import React, { useState, useMemo } from "react";

const Increment = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const dubble = (count) => {
    let i = 0;
    while (i < 100000000) i++; // 無駄な処理を挟んで時間がかかるようにしている
    return count * 2;
  };

  // 第一引数にメモ化する値を計算する処理を指定, 第二引数にその計算が依存する値を指定
  const dubbleCount = useMemo(() => dubble(count1), [count1]);

  // 以下のようにdubbleCountを定義すると、メモ化されず
  // Increment count2をクリックしたときも dubbleCount が再計算されてしまうため
  // 再レンダリングに時間がかかる
  // const dubbleCount = dubble(count1);

  return (
    <>
      <p>count1: {count1}</p>
      <p>DubbleCount: {dubbleCount}</p>
      <button onClick={() => setCount1(count1 + 1)}>Increment count1</button>

      <p>count2: {count2}</p>
      <button onClick={() => setCount2(count2 + 1)}>Increment count2</button>
    </>
  );
};

export default Increment;
