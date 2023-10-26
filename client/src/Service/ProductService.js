import { axiosBase } from "./UserService";

const getAllProducts = async () => {
  try {
    const res = await axiosBase({
      method: "GET",
      url: "product/get-all",
    });
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
const createProduct = async (data) => {
  try {
    const {
      token,
      name,
      image,
      type,
      price,
      discount,
      countInStock,
      ratting,
      description,
    } = data;
    const res = await axiosBase({
      method: "POST",
      url: "product/create",
      data: {
        name,
        image,
        type,
        price,
        discount,
        countInStock,
        ratting,
        description,
      },
      headers: {
        token: token,
      },
    });
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

const updateProduct = async (data) => {
  try {
    const {
      token,
      id,
      name,
      image,
      type,
      price,
      discount,
      sold,
      countInStock,
      ratting,
      description,
    } = data;
    const res = await axiosBase({
      method: "PUT",
      url: `product/update/${id}`,
      data: {
        name,
        image,
        type,
        price,
        discount,
        sold,
        countInStock,
        ratting,
        description,
      },
      headers: {
        token: token,
      },
    });
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
const getDetailProduct = async (id) => {
  try {
    const res = await axiosBase({
      method: "GET",
      url: `product/detail/${id}`,
    });
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
const deleteProduct = async (id) => {
  try {
    const res = await axiosBase({
      method: "DELETE",
      url: `product/delete/${id}`,
    });
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export {
  getAllProducts,
  createProduct,
  getDetailProduct,
  updateProduct,
  deleteProduct,
};
