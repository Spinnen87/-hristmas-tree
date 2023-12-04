import React, { useState, useContext } from "react";
import { Button } from "antd";
import { JoinModal } from "./JoinModal";
import { CurrentUserContext } from "../../CurrentUserContext";
import { HNY_CURRENT_USER } from "../../consts";

export const JoinBtn = () => {
  const { currentUser } = useContext(CurrentUserContext);
  const [isShowModal, setIsShowModal] = useState(false);

  const isSavedUser = localStorage.getItem(HNY_CURRENT_USER);

  return (
    <>
      {!currentUser && !isSavedUser && (
        <div
          style={{
            position: "fixed",
            bottom: 0,
            marginBottom: "10px",
            zIndex: 100,
          }}
        >
          <Button onClick={() => setIsShowModal(true)} type="primary" danger>
            Join
          </Button>

          {isShowModal && (
            <JoinModal closeModal={() => setIsShowModal(false)} />
          )}
        </div>
      )}
    </>
  );
};
