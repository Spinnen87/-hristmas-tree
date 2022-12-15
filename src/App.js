import imgSrc from "./images/christmas-tree2.png";
import { Circle } from "./Components/Сircle/Сircle";
import { JoinBtn } from "./Components/Join/Join";
import "./snowflakes";

function App() {
  return (
    <div className={"app"}>
      <img src={imgSrc} alt="Christmas tree" height={700} />
      <Circle />
      <JoinBtn />
    </div>
  );
}

export default App;
