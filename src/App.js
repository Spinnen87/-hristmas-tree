import { initializeApp } from "firebase/app";
import imgSrc from './images/christmas-tree.png'
import {SignIn} from "./Components/SignIn/SignIn";
import {Circle} from "./Components/Сircle/Сircle";
import {getFireBaseConfig} from "./firebase-config";

initializeApp(getFireBaseConfig());

function App() {
  return (
    <div className={'app'}>
        <img src={imgSrc} alt='Christmas tree'/>
        <Circle />
        <SignIn />
    </div>
  );
}

export default App;
