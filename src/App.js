import Lottery from "./Lottery";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Lottery Project</h1>
      <Lottery />
      <Lottery title="This is second lotto" maxBalls={4} maxNum={20} />
    </div>
  );
}
