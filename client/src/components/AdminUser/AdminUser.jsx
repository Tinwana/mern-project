import classNames from "classnames/bind";
import styles from "./AdminUser.module.scss";
import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import TableComponent from "../TableComponent/TableComponent";

const cx = classNames.bind(styles);

const AdminUser = () => {
  return (
    <div className={cx("wrapper")}>
      <h1 className={cx("user__manager")}>User Manager</h1>
      <Button
        style={{
          width: 150,
          height: 150,
          borderStyle: "dashed",
          marginTop: 10,
        }}
      >
        <PlusOutlined style={{ fontSize: 48 }} />
      </Button>
      <div className={cx("table__wrapper")}>
        <TableComponent />
      </div>
    </div>
  );
};

export default AdminUser;
