import React, { useEffect, useState } from "react";
import { onSnapshot } from "firebase/firestore";
import { Container, Item, Item2 } from "./styles";
import { usersCollectionsRef } from "../../firebase-config";

export const Circle = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    return onSnapshot(usersCollectionsRef, (snapshot) => {
      setUsers(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
  }, []);

  const avatarsCount = users.length < 8 ? 8 : users.length;
  const tan = Math.tan(Math.PI / avatarsCount);

  console.log(users);
  return (
    <Container m={avatarsCount} tan={tan}>
      {users.map((user, index) => (
        <Item key={user.id} i={index}>
          <Item2>
            <img
              src={
                user.avatarUrl ||
                "https://firebasestorage.googleapis.com/v0/b/happy-new-year-2cf02.appspot.com/o/avatars%2Funknown-user.png?alt=media&token=4a9e0a3e-b049-4cbe-b2d9-ec23ba57f881"
              }
              alt={user.name}
              className={"img"}
            />
          </Item2>
        </Item>
      ))}
    </Container>
  );
};
