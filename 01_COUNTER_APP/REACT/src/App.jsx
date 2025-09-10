import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);

  const handleClick = (symbol) => {
    if (symbol == "+") {
      setCount((prev) => prev + 1);
    } else {
      count > 0 && setCount((prev) => prev - 1);
    }
  };

  return (
    <div id="container">
      <h1>{count}</h1>
      <div id="btn-holder">
        <button
          id="increase"
          onClick={() => {
            handleClick("+");
          }}
        >
          increase
        </button>
        <button
          id="decrease"
          onClick={() => {
            handleClick("-");
          }}
        >
          decrease
        </button>
      </div>
    </div>
  );
}

export default App;
