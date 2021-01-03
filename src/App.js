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

const HelloLanguage = ({ isReact }) => {
  return isReact ? <p>Hello, React</p> : <p>Hello others</p>;
};

function App() {
  const name = "Kenzo";
  const data = {
    firstName: "John",
    lastName: "Doe",
  };
  return (
    <>
      <h2>Hello React!</h2>
      <p className="hoge">1 + 1 = {1 + 1}</p>
      <Hello name={name} />
      <HelloWorld {...data} />
      <HelloLanguage isReact={true} />
    </>
  );
}

export default App;
