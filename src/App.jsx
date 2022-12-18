import imgSrc from "./images/christmas-tree.png";
import imgSrc2 from "./images/christmas-tree2.png";
import { RoundDance } from "./Components/RoundDance/RoundDance";
import { JoinBtn } from "./Components/Join/Join";
import "./snowflakes";

function App() {
  return (
    <div className={"app"}>
      <img src={imgSrc} alt="Christmas tree" height={600} />
      <img src={imgSrc2} alt="Christmas tree" height={600}  style={{position: 'absolute', 'zIndex': 2}}/>
      <RoundDance />
      <JoinBtn />
    </div>
  );
}

export default App;
