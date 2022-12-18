import React, { useState, useId } from "react";
import { Button, Input, Modal, Upload, Space, message } from "antd";
import { addDoc } from "firebase/firestore";
import { storage, usersCollectionsRef } from "../../firebase-config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { UploadOutlined } from "@ant-design/icons";
import { beforeUpload } from "./helpers";

export const JoinModal = ({ closeModal }) => {
  const id = useId();
  const [avatarImg, setAvatarImg] = useState(null);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [userName, setUserName] = useState("");

  const handleOk = async () => {
    if (!userName || !avatarImg) {
      message.error("Заполните форму");
      return;
    }
    setConfirmLoading(true);

    const { file } = avatarImg;
    const fileName = `avatars/${userName}${id}${file.name}`;
    const fileRef = ref(storage, fileName);
    const snapshot = await uploadBytes(fileRef, file);
    const avatarUrl = await getDownloadURL(snapshot.ref);
    await addDoc(usersCollectionsRef, { name: userName, avatarUrl });

    setConfirmLoading(false);
    closeModal();
  };

  return (
    <Modal
      title="Хочу водить хоровод"
      open={true}
      onOk={handleOk}
      confirmLoading={confirmLoading}
      onCancel={closeModal}
    >
      <Space direction="vertical" style={{ width: "100%" }}>
        <Input
          placeholder="Введите имя"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          status={userName ? null : "error"}
        />
        <Upload
          beforeUpload={beforeUpload}
          removeFile={() => setAvatarImg()}
          onChange={(file) => setAvatarImg(file)}
          maxCount={1}
          listType="picture"
        >
          <Button icon={<UploadOutlined />}>Выбрать аватар</Button>
        </Upload>
      </Space>
    </Modal>
  );
};
