import { useState, useEffect } from "react"

function App() {
  const [counter, setVal] = useState(0);
  const onClick = () => setVal((prev) => prev + 1)
  
  console.log("Run All Time")

  useEffect(() => {
    console.log("Call Api") // Api를 한번만 호출 - useEffect
  }, []) // [] 안에 counter가 들어갈시 useState가 변경될 때마다 리렌더링, []가 비어있으면 한번만 실행, 부분적으로 한번만 실행시킬때 유용
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click Button</button>
    </div>
  );
}

export default App;
