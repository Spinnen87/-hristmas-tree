import imgSrc from "./images/christmas-tree.png";
import { RoundDance } from "./Components/RoundDance/RoundDance";
import { JoinBtn } from "./Components/Join/Join";
import "./snowflakes";

function App() {
  return (
    <div className={"app"}>
      <img src={imgSrc} alt="Christmas tree" height={600} />
      <RoundDance />
      <JoinBtn />
    </div>
  );
}

export default App;
