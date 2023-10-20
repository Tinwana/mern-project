import { Row } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const WrapperHeader = styled(Row)`
  padding: 10px 120px;
  background-color: rgb(26, 148, 255);
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  flex-wrap: nowrap;
`;
export const WrapperTextHeader = styled(Link)`
  font-size: 18px;
  color: #fff;
  font-weight: 600;
  text-align: left;
  cursor: pointer;
`;
export const WrapperAccountHeader = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  gap: 10px;
  font-size: 12px;
  margin-left: 32px;
`;
export const WrapperTextSmallHeader = styled.span`
  font-size: 12px;
  color: #fff;
  white-space: nowrap;
`;
