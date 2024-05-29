import React, {useState} from 'react'

function Counter() {
  const [count, setCount] = useState(1);
  function increment() {
  setCount(count + 1);
  }
  return (
    <div className="App">
    <h1>{count}</h1>
    <button onClick={increment}>Increase</button>
    </div>
  );
}

export default Counter;