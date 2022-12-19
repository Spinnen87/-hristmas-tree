import { useState, useEffect } from "react";
import imgSrc from "./images/christmas-tree.png";
import imgSrc2 from "./images/christmas-tree2.png";
import { RoundDance } from "./Components/RoundDance/RoundDance";
import { JoinBtn } from "./Components/Join/Join";
import { Congratulation } from "./Components/Congratulation/Congratulation";
import { CurrentUserContext } from "./CurrentUserContext";
import { HNY_CURRENT_USER } from "./consts";
import { db } from "./firebase-config";
import { doc, getDoc } from "firebase/firestore";
import "./snowflakes";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const userId = localStorage.getItem(HNY_CURRENT_USER);

    if (userId) {
      const getUserData = async () => {
        const docRef = doc(db, "users", userId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setCurrentUser(docSnap.data());
        }
      };

      getUserData();
    }
  }, []);

  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      <div className={"app"}>
        <img src={imgSrc} alt="Christmas tree" height={600} />
        <img
          src={imgSrc2}
          alt="Christmas tree"
          height={600}
          style={{ position: "absolute", zIndex: 2 }}
        />
        <RoundDance />
        <JoinBtn />
        <Congratulation />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
