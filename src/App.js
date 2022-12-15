import imgSrc from './images/christmas-tree2.png'
import {SignIn} from "./Components/SignIn/SignIn";
import {Circle} from "./Components/Сircle/Сircle";
import './snowflakes';

function App() {
  return (
    <div className={'app'}>
        <img src={imgSrc} alt='Christmas tree' height={700}/>
        <Circle />
        <SignIn />
    </div>
  );
}

export default App;
