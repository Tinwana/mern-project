import axios from "axios";
export const axiosJwt = axios.create({});
export const axiosBase = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}`,
});

const loginUser = async (data) => {
  const { apiUrl, email, password } = data;
  const response = await axiosBase({
    method: "POST",
    url: apiUrl,
    data: {
      email,
      password,
    },
  });
  return response.data;
};
const signUpUser = async (data) => {
  const { apiUrl, email, password, passwordConfirm } = data;
  const response = await axiosBase({
    method: "POST",
    url: apiUrl,
    data: {
      email,
      password,
      passwordConfirm,
    },
  });
  return response.data;
};
const getDetailUser = async (id, access_token) => {
  const response = await axiosJwt({
    method: "GET",
    url: `user/get-detail/${id}`,
    data: {
      id,
    },
    headers: {
      token: `bearer ${access_token}`,
    },
  });
  return response.data;
};

const refreshToken = async (token) => {
  const response = await axiosBase({
    method: "POST",
    withCredentials: true,
    url: `user/refresh-token`,
  });
  console.log(response.data);
  return response.data;
};
export { loginUser, signUpUser, getDetailUser, refreshToken };
