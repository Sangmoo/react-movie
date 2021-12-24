import Button from "./Button.js"
import styles from "./App.module.css"

function App() {
  return (
    <div className="App">
      <h1 className={styles.title}> WelCome </h1>
      <Button text={"Continue"} />
    </div>
  );
}

export default App;
