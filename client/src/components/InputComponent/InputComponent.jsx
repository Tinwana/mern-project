import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./InputComponent.module.scss";
import { Button, Input } from 'antd';
const cx = classNames.bind(styles);
const InputComponent = ({ placeholder, type='text' }) => {
  const [userValue, setUserValue] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  return (
    <>
      {type === "text" ? (
        <Input
          placeholder={placeholder}
          value={userValue}
          onChange={(e) => setUserValue(e.target.value)}
        />
      ) : (
       <>
         <Input.Password
           placeholder="input password"
           visibilityToggle={{ visible: passwordVisible, onVisibleChange: setPasswordVisible }}
         />
         <Button style={{ width: 80 }} onClick={() => setPasswordVisible((prevState) => !prevState)}>
           {passwordVisible ? 'Hide' : 'Show'}
         </Button>
       </>
      )}
    </>
  );
};

export default InputComponent;
