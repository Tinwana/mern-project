import { Button } from "antd";

export const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Type",
    dataIndex: "type",
  },
  {
    title: "Price",
    dataIndex: "price",
  },
  {
    title: "Discount",
    dataIndex: "discount",
  },
  {
    title: "Quantity",
    dataIndex: "countInStock",
  },
  {
    title: "Rate",
    dataIndex: "ratting",
  },
  {
    title: "Description",
    dataIndex: "description",
    render: (text) => (
      <span
        style={{
          maxHeight: "3.2em",
          overflow: "hidden",
          lineHeight: "1.6em",
          textOverflow: "ellipsis",
        }}
      >
        {text}
      </span>
    ),
  },
  {
    title: "Edit",
    render: () => (
      <div
        style={{
          display: "flex",
          gap: 8,
        }}
      >
        <Button type="primary">Update</Button>
        <Button danger>Delete</Button>
      </div>
    ),
  },
];
