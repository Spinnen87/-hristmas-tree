import React, { useState, useEffect } from "react";
import { onSnapshot } from "firebase/firestore";
import { congratulationMessagesCollectionsRef } from "../../firebase-config";
import { MessagesListContainer, Container } from "./styles";
import { Avatar, List, Typography } from "antd";

const { Title } = Typography;

export const MessagesList = () => {
  const [messagesList, setMessagesList] = useState([]);

  useEffect(() => {
    return onSnapshot(congratulationMessagesCollectionsRef, (snapshot) => {
      if (!snapshot.metadata.hasPendingWrites) {
        const mesList = snapshot.docs
          .map((doc) => ({ id: doc.id, ...doc.data() }))
          .sort((a, b) => b?.timestamp?.seconds - a?.timestamp?.seconds);
        setMessagesList(mesList);
      }
    });
  }, []);

  return (
    <>
      <Container>
        <Title level={5} type="danger">
          Поздравления
        </Title>
      </Container>
      <MessagesListContainer>
        <List
          itemLayout="horizontal"
          dataSource={messagesList}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={item.avatarUrl} />}
                title={item.userName}
                description={item.message}
              />
            </List.Item>
          )}
        />
      </MessagesListContainer>
    </>
  );
};
