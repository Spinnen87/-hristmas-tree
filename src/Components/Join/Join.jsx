import React, { useState } from "react";
import { Button } from "antd";
import { JoinModal } from "./JoinModal";

export const JoinBtn = () => {
  const [isShowModal, setIsShowModal] = useState(false);

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        marginBottom: "10px",
        zIndex: 100,
      }}
    >
      <Button onClick={() => setIsShowModal(true)} type="primary" danger>
        Присоединиться
      </Button>

      {isShowModal && <JoinModal closeModal={() => setIsShowModal(false)} />}
    </div>
  );
};
