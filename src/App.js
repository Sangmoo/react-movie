import { useState } from "react"

function App() {
  const [counter, setVal] = useState(0);
  const onClick = () => setVal((prev) => prev + 1)
  console.log("Call Api")
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click Button</button>
    </div>
  );
}

export default App;
