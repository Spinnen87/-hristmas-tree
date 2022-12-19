import React, { useContext, useState } from "react";
import { Input, Button, Space, Spin, message } from "antd";
import { SendOutlined } from "@ant-design/icons";
import { addDoc, serverTimestamp } from "firebase/firestore";
import { congratulationMessagesCollectionsRef } from "../../firebase-config";
import { CurrentUserContext } from "../../CurrentUserContext";

const { TextArea } = Input;

export const SendCongratulation = () => {
  const { currentUser } = useContext(CurrentUserContext);
  const [congratulationText, setCongratulationText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handelSendMEssage = async () => {
    if (!congratulationText) {
      message.error("Введите текст поздравления");
      return;
    }
    try {
      setIsLoading(true);
      await addDoc(congratulationMessagesCollectionsRef, {
        userName: currentUser.name,
        avatarUrl: currentUser.avatarUrl,
        message: congratulationText,
        timestamp: serverTimestamp(),
      });
      setCongratulationText("");
      setIsLoading(false);
    } catch {
      console.log("Send message: Something went wrong...");
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
              value={congratulationText}
              onChange={(e) => setCongratulationText(e.target.value)}
              placeholder="Введите текст поздравления"
            />
            <Button
              icon={<SendOutlined />}
              onClick={handelSendMEssage}
              style={{ width: "100%" }}
              type="primary"
            >
              Поздравить
            </Button>
          </Space>
        </Spin>
      )}
    </>
  );
};
