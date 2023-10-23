import { Upload } from "antd";
import styled from "styled-components";

const shouldForwardProp = (prop) => ["maxCount"].includes(prop);

const WrapperUpload = styled(Upload)`
  & & .ant-upload.ant-upload-select.ant-upload-select-picture-card {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
  & .ant-upload-list-item-container {
    display: none;
  }
  &
    .ant-upload-wrapper
    .sc-gKclGN
    .bUUwbh
    .css-dev-only-do-not-override-14wwjjs
    input:disabled {
    cursor: not-allowed;
  }
`;

export { WrapperUpload, shouldForwardProp };
