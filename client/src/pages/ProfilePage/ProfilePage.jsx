import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import classNames from "classnames/bind";
import { UserOutlined, UploadOutlined } from "@ant-design/icons";
import styles from "./ProfilePage.module.scss";
import { Button, Input, Upload } from "antd";
import { useMutationHook } from "../../hooks/useMutationHook";
import {
  getDetailUser,
  updateUser as updateUserService,
} from "../../Service/UserService";
import { updateUser } from "../../redux/slides/userSlide";
import getBase64 from "../../utils/getBase64";
import { WrapperUpload } from "./ProfileStyleComponent";
import useLoadingHook from "../../hooks/useLoadingHook";

const cx = classNames.bind(styles);

const ProfilePage = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState(user?.name);
  const [phone, setPhone] = useState(user?.phone);
  const [address, setAddress] = useState(user?.address);
  const [avatar, setAvatar] = useState(user?.avatar);
  const [readOnly, setReadOnly] = useState(true);
  const updateUserMutations = useMutationHook((data) =>
    updateUserService(data)
  );
  const { data, isLoading, isSuccess } = updateUserMutations;
  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const apiUrl = `user/update/${user.id}`;
    updateUserMutations.mutate({ name, phone, address, avatar, apiUrl });
  };
  const handleGetDetailUser = async (id, token) => {
    const res = await getDetailUser(id, token);
    if (res.status === "error") return;
    dispatch(
      updateUser({
        ...res?.data.user,
        access_token: token,
        refreshToken: res?.data.refresh_token,
      })
    );
  };
  const handleOnChangeAvatar = async ({ fileList }) => {
    const file = fileList[0];
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setAvatar(file.preview);
  };
  useEffect(() => {
    if (isSuccess) {
      setReadOnly(true);
      handleGetDetailUser(user.id, user.access_token);
    } else if (user?.refreshToken === "") {
      return navigate("/");
    }
  }, [user, isSuccess]);
  useLoadingHook(isLoading);
  return (
    <>
      <div className={cx("profile")}>
        <div className={cx("profile__option")}>
          <div className={cx("profile__option--avatar")}>
            <div className={cx("profile__option--image")}>
              {user.avatar ? (
                <img
                  width={40}
                  height={40}
                  style={{ borderRadius: "50%", objectFit: "cover" }}
                  src={user.avatar}
                  alt="avatar"
                />
              ) : (
                <UserOutlined style={{ fontSize: "30px" }} />
              )}
            </div>
            <div className={cx("profile__option--name")}>
              <p className={cx("name")}>{user.name ? user.name : user.email}</p>
            </div>
          </div>
          <div className={cx("profile__option--detail")}>
            <p className={cx("profile__logout")}>Log Out</p>
          </div>
        </div>
        <form onSubmit={handleUpdateProfile} className={cx("profile__detail")}>
          <div className={cx("detail__text")}>
            <h1>Customer Profile</h1>
          </div>
          <div className={cx("detail__info")}>
            <div className={cx("detail__info--text")}>
              <p className={cx("text")}>
                <span
                  style={{
                    color: "#c4cacd",
                    display: "inline-block",
                    width: "64px",
                  }}
                >
                  Name:{" "}
                </span>{" "}
                {readOnly === true ? (
                  <span style={{ fontWeight: 600 }}>{user.name}</span>
                ) : (
                  <Input
                    style={{ width: "auto" }}
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                )}
              </p>
              <p className={cx("text")}>
                <span
                  style={{
                    color: "#c4cacd",
                    display: "inline-block",
                    width: "64px",
                  }}
                >
                  Email:{" "}
                </span>{" "}
                <span style={{ fontWeight: 600 }}>{user.email}</span>
              </p>
              <p className={cx("text")}>
                <span
                  style={{
                    color: "#c4cacd",
                    display: "inline-block",
                    width: "64px",
                  }}
                >
                  Phone:{" "}
                </span>{" "}
                {readOnly === true ? (
                  <span style={{ fontWeight: 600 }}>{user.phone}</span>
                ) : (
                  <Input
                    style={{ width: "auto" }}
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                  />
                )}
              </p>
              <p className={cx("text")}>
                <span
                  style={{
                    color: "#c4cacd",
                    display: "inline-block",
                    width: "64px",
                  }}
                >
                  Address:{" "}
                </span>{" "}
                {readOnly === true ? (
                  <span style={{ fontWeight: 600 }}>{user.address}</span>
                ) : (
                  <Input
                    style={{ width: "auto" }}
                    value={address}
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                  />
                )}
              </p>
              <Button danger>Change password</Button>
            </div>
            <div className={cx("detail__info--image")}>
              {avatar ? (
                <img
                  width={140}
                  height={140}
                  style={{ objectFit: "cover" }}
                  src={avatar}
                  alt="avatar"
                />
              ) : (
                <UserOutlined style={{ fontSize: "100px" }} />
              )}
              <WrapperUpload
                disabled={readOnly}
                maxCount={1}
                onChange={handleOnChangeAvatar}
              >
                <Button icon={<UploadOutlined />}>Upload New</Button>
              </WrapperUpload>
            </div>
          </div>
          <div className={cx("profile__edit")}>
            <Button
              onClick={(e) => {
                setReadOnly(!readOnly);
              }}
              danger
              type="primary"
            >
              Edit Profile
            </Button>
            <Button htmlType="submit" disabled={readOnly} type="primary">
              Update
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ProfilePage;
