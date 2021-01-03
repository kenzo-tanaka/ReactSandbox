import Counter from "./Counter";
import Timer from "./Timer";

// 大文字である必要がある
// propsを受け取って、props.name でもアクセスできるが、下記の方が容易
const Hello = ({ name }) => {
  return <h1>Hoge!!! {name}</h1>;
};

const HelloWorld = ({ firstName, lastName }) => {
  return (
    <h2>
      Hello, {firstName} {lastName}
    </h2>
  );
};

// 条件分岐
const HelloLanguage = ({ isReact }) => {
  return isReact ? <p>Hello, React</p> : <p>Hello others</p>;
};

// ループを伴う処理、keyの指定が必要で
// for を使った書き方はしない。変数を排除するため
const LoopValues = () => {
  const books = [
    { id: 1, title: "hoge1" },
    { id: 2, title: "hoge2" },
    { id: 3, title: "hoge3" },
  ];

  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>{book.title}</li>
      ))}
    </ul>
  );
};

const App = () => {
  const name = "Kenzo";
  const data = {
    firstName: "John",
    lastName: "Doe",
  };

  const handleClick = () => {
    console.log("clicked!");
  };

  const eventHandle = (event) => {
    event.preventDefault();
    console.log("Hoge");
  };

  return (
    <>
      <h2>Hello React!</h2>
      <p className="hoge">1 + 1 = {1 + 1}</p>
      <Hello name={name} />
      <HelloWorld {...data} />
      <HelloLanguage isReact={true} />
      <LoopValues />
      {/* イベントハンドラを指定 */}
      <button onClick={handleClick}>Handle!</button>
      {/* 直接書く */}
      <button onClick={() => console.log("clicked!")}>click</button>
      <button onClick={eventHandle}>Event Handle</button>
      <Counter />
      <Timer />
    </>
  );
};

export default App;
