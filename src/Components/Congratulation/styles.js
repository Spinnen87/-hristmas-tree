import styled from "styled-components";

export const CongratulationContainer = styled.div`
  position: fixed;
  right: 0;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.3);
  display: flex;
  flex-direction: column;
  width: 300px;
`;

export const MessagesListContainer = styled.div`
  flex-grow: 2;
  overflow: scroll;
`;

export const Container = styled.div`
  text-align: center;
  border-bottom: 1px solid rgba(5, 5, 5, 0.06);
`;
