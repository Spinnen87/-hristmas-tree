import React, { useContext, useState } from "react";
import { Input, Button, Space, Spin } from "antd";
import { SendOutlined } from "@ant-design/icons";
import { addDoc, serverTimestamp } from "firebase/firestore";
import { congratulationMessagesCollectionsRef } from "../../firebase-config";
import { CurrentUserContext } from "../../CurrentUserContext";

const { TextArea } = Input;

export const SendCongratulation = () => {
  const { currentUser } = useContext(CurrentUserContext);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handelSendMEssage = async () => {
    if (!message) {
      message.error("Введите поздравление");
      return;
    }
    try {
      setIsLoading(true);
      await addDoc(congratulationMessagesCollectionsRef, {
        userName: currentUser.name,
        avatarUrl: currentUser.avatarUrl,
        message,
        timestamp: serverTimestamp(),
      });
      setMessage("");
      setIsLoading(false);
    } catch {
      console.log("Add user: Something went wrong...");
    }
  };

  return (
    <>
      {currentUser && (
        <Spin spinning={isLoading}>
          <Space
            direction="vertical"
            style={{ width: "100%", padding: "12px" }}
          >
            <TextArea
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button
              icon={<SendOutlined />}
              onClick={handelSendMEssage}
              style={{ width: "100%" }}
              type="primary"
            >
              Отправить поздравление
            </Button>
          </Space>
        </Spin>
      )}
    </>
  );
};
