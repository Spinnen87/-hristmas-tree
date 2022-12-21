import React from "react";
import {
  Container,
  Item as UserContainer,
  ImgAnimateContainer as AnimateContainer,
  StyledImg,
} from "./styles";

export const Circle = ({ users, count }) => {
  const tan = Math.tan(Math.PI / count);

  return (
    <Container count={count} tan={tan}>
      {users.map((user, index) => (
        <UserContainer key={user.id} i={index}>
          <AnimateContainer>
            <StyledImg
              src={
                user.avatarUrl ||
                "https://firebasestorage.googleapis.com/v0/b/happy-new-year-2cf02.appspot.com/o/avatars%2Funknown-user.png?alt=media&token=4a9e0a3e-b049-4cbe-b2d9-ec23ba57f881"
              }
              alt={user.name}
            />
            {user.name}
          </AnimateContainer>
        </UserContainer>
      ))}
    </Container>
  );
};
