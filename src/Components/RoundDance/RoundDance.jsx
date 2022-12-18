import React, { useEffect, useState, useMemo } from "react";
import { onSnapshot } from "firebase/firestore";
import { usersCollectionsRef } from "../../firebase-config";
import { Circle } from "./Сircle/Сircle";
import { getCircles } from "./helpers";


export const RoundDance = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    return onSnapshot(usersCollectionsRef, (snapshot) => {
      setUsers(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
  }, []);

  const circles = useMemo(() => getCircles(users), [users]);

  return (
      <>
        {!!circles.length && circles.map(({users, count}) => (
            <Circle key={count} users={users} count={count} /> 
        ))}
      </>
  );
};
