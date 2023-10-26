import { Radio, Table } from "antd";
import { columns, data as defaultData, rowSelection } from "./TableConfig";
const TableComponent = ({
  type = "checkbox",
  column = columns,
  data = defaultData,
}) => {
  return (
    <>
      <Table
        rowSelection={{
          type: type,
          ...rowSelection,
        }}
        columns={column}
        dataSource={data}
      />
    </>
  );
};

export default TableComponent;
