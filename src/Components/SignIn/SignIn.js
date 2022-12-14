import React, {useState} from "react";
import {Button, Input, Modal} from "antd";

export const SignIn = () => {
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);

    const showModal = () => {
        setOpen(true);
    };

    const handleOk = () => {
        setConfirmLoading(true);
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
        }, 2000);
    };

    const handleCancel = () => {
        setOpen(false);
    };

    return (
        <div style={{position: 'fixed', bottom: 0, marginBottom: '10px'}}>
            <Button type="primary" onClick={showModal}>
                Join
            </Button>
            <Modal
                title="Присоедениться к хороводу"
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                <Input placeholder="Введите ваше имя" />
            </Modal>
        </div>
    );
}