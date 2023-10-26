import { Form, Input, Button } from "antd";
const ProductFormComponent = () => {
  return (
    <Form
      name="form_item_path"
      layout="vertical"
      style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        gap: "2rem",
        justifyContent: "space-between",
        alignItems: "baseline",
        padding: "30px",
        paddingRight: "52px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "2rem",
          width: "100%",
        }}
      >
        <label
          htmlFor="name"
          style={{
            color: "#c4cacd",
            display: "inline-block",
            width: "80px",
          }}
        >
          Name:
        </label>
        <Input style={{ width: "auto", flexGrow: 1 }} id="name" />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "2rem",
          width: "100%",
        }}
      >
        <label
          htmlFor="type"
          style={{
            color: "#c4cacd",
            display: "inline-block",
            width: "80px",
          }}
        >
          Type:
        </label>
        <Input style={{ width: "auto", flexGrow: 1 }} id="type" />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "2rem",
          width: "100%",
        }}
      >
        <label
          htmlFor="price"
          style={{
            color: "#c4cacd",
            display: "inline-block",
            width: "80px",
          }}
        >
          Price:
        </label>
        <Input style={{ width: "auto", flexGrow: 1 }} id="price" />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "2rem",
          width: "100%",
        }}
      >
        <label
          htmlFor="discount"
          style={{
            color: "#c4cacd",
            display: "inline-block",
            width: "80px",
          }}
        >
          Discount:
        </label>
        <Input style={{ width: "auto", flexGrow: 1 }} id="discount" />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "2rem",
          width: "100%",
        }}
      >
        <label
          htmlFor="countInStock"
          style={{
            color: "#c4cacd",
            display: "inline-block",
            width: "80px",
          }}
        >
          Quantity:
        </label>
        <Input style={{ width: "auto", flexGrow: 1 }} id="countInStock" />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "2rem",
          width: "100%",
        }}
      >
        <label
          htmlFor="description"
          style={{
            color: "#c4cacd",
            display: "inline-block",
            width: "80px",
          }}
        >
          Description:
        </label>
        <Input style={{ width: "auto", flexGrow: 1 }} id="description" />
      </div>
    </Form>
  );
};

export default ProductFormComponent;
