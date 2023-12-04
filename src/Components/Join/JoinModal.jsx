import React, { useState, useId, useContext } from "react";
import { Button, Input, Modal, Upload, Space, message, Spin } from "antd";
import { addDoc } from "firebase/firestore";
import { storage, usersCollectionsRef } from "../../firebase-config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { UploadOutlined } from "@ant-design/icons";
import { beforeUpload } from "./helpers";
import { HNY_CURRENT_USER } from "../../consts";
import { CurrentUserContext } from "../../CurrentUserContext";

export const JoinModal = ({ closeModal }) => {
  const { setCurrentUser } = useContext(CurrentUserContext);
  const id = useId();
  const [avatarImg, setAvatarImg] = useState(null);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [userName, setUserName] = useState("");

  const handleOk = async () => {
    if (!userName || !avatarImg) {
      message.error("Please fill the form");
      return;
    }
    setConfirmLoading(true);
    try {
      const { file } = avatarImg;
      const fileName = `avatars/${userName}${id}${file.name}`;
      const fileRef = ref(storage, fileName);
      const snapshot = await uploadBytes(fileRef, file, {
        cacheControl: "public, max-age=300",
      });
      const avatarUrl = await getDownloadURL(snapshot.ref);
      const user = {
        name: userName,
        avatarUrl,
      };
      const userSnapshot = await addDoc(usersCollectionsRef, user);
      localStorage.setItem(HNY_CURRENT_USER, userSnapshot.id);
      setCurrentUser({
        ...user,
        id: userSnapshot.id,
      });
      setConfirmLoading(false);
      closeModal();
    } catch {
      console.log("Add user: Something went wrong...");
    }
  };

  return (
    <Modal
      title="I want to dance in a circle"
      open={true}
      onOk={handleOk}
      confirmLoading={confirmLoading}
      onCancel={closeModal}
    >
      <Spin spinning={confirmLoading}>
        <Space direction="vertical" style={{ width: "100%" }}>
          <Input
            placeholder="Enter your name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <Upload
            beforeUpload={beforeUpload}
            removeFile={() => setAvatarImg()}
            onChange={(file) => setAvatarImg(file)}
            maxCount={1}
            listType="picture"
          >
            <Button icon={<UploadOutlined />}>Select an avatar</Button>
          </Upload>
        </Space>
      </Spin>
    </Modal>
  );
};
