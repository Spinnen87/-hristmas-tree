import React from "react";
import { MessagesList } from "./MessagesList";
import { SendCongratulation } from "./SendCongratulation";
import { CongratulationContainer } from "./styles";

export const Congratulation = () => {
  return (
    <CongratulationContainer>
      <MessagesList />
      <SendCongratulation />
    </CongratulationContainer>
  );
};
