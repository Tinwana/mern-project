import { Upload } from "antd";
import styled from "styled-components";

const WrapperUpload = styled(Upload)`
  & .ant-upload.ant-upload-select.ant-upload-select-picture-card {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
  & .ant-upload-list-item-container {
    display: none;
  }
  & :where(.css-dev-only-do-not-override-14wwjjs).ant-btn-default {
    border-color: #b2a09b;
    color: #b2a09b;
  }
  &
    .ant-upload-wrapper
    .sc-gKclGN
    .bUUwbh
    .css-dev-only-do-not-override-14wwjjs
    input:disable {
    cursor: not-allow;
  }
`;
export { WrapperUpload };
