import { message, Upload  } from "antd";

export const beforeUpload = (file) => {
    if (!['image/jpeg' , 'image/png' ].includes(file.type)) {
      message.error('You can only upload JPG/PNG file!');
      return Upload.LIST_IGNORE;
    }

    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
      return Upload.LIST_IGNORE;
    }
    return false;
  }