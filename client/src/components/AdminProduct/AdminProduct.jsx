import classNames from "classnames/bind";
import styles from "./AdminProduct.module.scss";
import { PlusOutlined, UploadOutlined } from "@ant-design/icons";
import { Button, Form, Input, Modal } from "antd";
import TableComponent from "../TableComponent/TableComponent";
import { useRef, useState } from "react";
import { WrapperUpload } from "../../pages/ProfilePage/ProfileStyleComponent";
import getBase64 from "../../utils/getBase64";
import { useMutationHook } from "../../hooks/useMutationHook";
import { createProduct, getAllProducts } from "../../Service/ProductService";
import useLoadingHook from "../../hooks/useLoadingHook";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { columns } from "./productTableConfig";

const cx = classNames.bind(styles);

const AdminProduct = () => {
  const user = useSelector((state) => state.user);
  let image = {};
  const nameProduct = useRef();
  const typeProduct = useRef();
  const priceProduct = useRef();
  const disCountProduct = useRef();
  const countInStockProduct = useRef();
  const rattingProduct = useRef();
  const descriptionProduct = useRef();
  const [primaryImage, setPrimaryImage] = useState("");
  const [subImage, setSubImage] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    const name = nameProduct.current?.input?.value;
    const type = typeProduct.current?.input?.value;
    const price = priceProduct.current?.input?.value;
    const discount = disCountProduct.current?.input?.value;
    const countInStock = countInStockProduct.current?.input?.value;
    const ratting = rattingProduct.current?.input?.value;
    const description = descriptionProduct.current?.input?.value;
    setIsModalOpen(false);
    createProductMutation.mutate({
      token: user.access_token,
      name,
      image,
      type,
      price,
      discount,
      countInStock,
      ratting,
      description,
    });
    setSubImage([]);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    setSubImage([]);
  };
  const handleOnChangePrimaryImage = async ({ fileList }) => {
    const file = fileList[0];
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPrimaryImage(file.preview);
  };
  const handleOnChangeSubImage = async ({ fileList }) => {
    const file = fileList[fileList.length - 1];
    const preview = file.preview || (await getBase64(file.originFileObj));
    if (!subImage.includes(preview)) {
      setSubImage((prev) => [...prev, preview]);
    }
  };
  image = {
    primary: primaryImage,
    subImage: subImage,
  };
  const createProductMutation = useMutationHook((data) => createProduct(data));
  const { isLoading: mutationLoading } = createProductMutation;
  useLoadingHook(mutationLoading);
  const { data: products, isLoading: queryLoading } = useQuery({
    queryKey: ["allProducts"],
    queryFn: getAllProducts,
    retry: 3,
  });
  useLoadingHook(queryLoading);
  return (
    <div className={cx("wrapper")}>
      <Modal
        title="Create Product"
        open={isModalOpen}
        okText="Create"
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form name="form_item_path" layout="vertical">
          <div
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
              <Input
                ref={nameProduct}
                style={{ width: "auto", flexGrow: 1 }}
                id="name"
              />
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
              <Input
                ref={typeProduct}
                style={{ width: "auto", flexGrow: 1 }}
                id="type"
              />
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
              <Input
                ref={priceProduct}
                style={{ width: "auto", flexGrow: 1 }}
                id="price"
              />
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
              <Input
                ref={disCountProduct}
                style={{ width: "auto", flexGrow: 1 }}
                id="discount"
              />
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
              <Input
                ref={countInStockProduct}
                style={{ width: "auto", flexGrow: 1 }}
                id="countInStock"
              />
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
                htmlFor="ratting"
                style={{
                  color: "#c4cacd",
                  display: "inline-block",
                  width: "80px",
                }}
              >
                Ratting:
              </label>
              <Input
                ref={rattingProduct}
                style={{ width: "auto", flexGrow: 1 }}
                id="ratting"
              />
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
              <Input
                ref={descriptionProduct}
                style={{ width: "auto", flexGrow: 1 }}
                id="description"
              />
            </div>
          </div>
          <div>
            <div className={cx("detail__info--image")}>
              {primaryImage && (
                <img
                  width={140}
                  height={140}
                  style={{ objectFit: "cover" }}
                  src={primaryImage}
                  alt="avatar"
                />
              )}
              <WrapperUpload maxCount={1} onChange={handleOnChangePrimaryImage}>
                <Button icon={<UploadOutlined />}>Primary Image</Button>
              </WrapperUpload>
            </div>
            <div className={cx("detail__info--image")}>
              <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
                {subImage &&
                  subImage.map((img, i) => (
                    <img
                      key={i}
                      width={70}
                      height={70}
                      style={{ objectFit: "cover" }}
                      src={img}
                      alt="avatar"
                    />
                  ))}
              </div>
              <WrapperUpload onChange={handleOnChangeSubImage}>
                <Button icon={<UploadOutlined />}>Sub Image</Button>
              </WrapperUpload>
            </div>
          </div>
        </Form>
      </Modal>
      <h1 className={cx("user__manager")}>Product Manager</h1>
      <Button
        onClick={showModal}
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
        <TableComponent column={columns} data={products?.data?.products} />
      </div>
    </div>
  );
};

export default AdminProduct;
