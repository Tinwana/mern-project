import axios from "axios";
export const axiosJwt = axios.create({
  baseURL: "/api/",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});
export const axiosBase = axios.create({
  baseURL: "/api/",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

const loginUser = async (data) => {
  try {
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
  } catch (error) {
    if (axios.isCancel(error)) {
      // Request was canceled due to timeout
      console.log("Request was canceled due to timeout");
    } else {
      // Request failed for other reasons (e.g., network error, 4xx/5xx response, etc.)
      console.error("Request failed:", error);
    }
  }
};
const signUpUser = async (data) => {
  try {
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
  } catch (error) {
    if (axios.isCancel(error)) {
      // Request was canceled due to timeout
      console.log("Request was canceled due to timeout");
    } else {
      // Request failed for other reasons (e.g., network error, 4xx/5xx response, etc.)
      console.error("Request failed:", error);
    }
  }
};
const getDetailUser = async (id, access_token) => {
  try {
    const response = await axiosJwt({
      method: "GET",
      url: `user/get-detail/${id}`,
      headers: {
        token: `bearer ${access_token}`,
      },
    });
    return response.data;
  } catch (error) {
    if (axios.isCancel(error)) {
      // Request was canceled due to timeout
      console.log("Request was canceled due to timeout");
    } else {
      // Request failed for other reasons (e.g., network error, 4xx/5xx response, etc.)
      console.error("Request failed:", error);
    }
  }
};

const refreshToken = async () => {
  try {
    const response = await axiosBase({
      method: "POST",
      withCredentials: true,
      url: `user/refresh-token`,
    });
    return response.data;
  } catch (error) {
    if (axios.isCancel(error)) {
      // Request was canceled due to timeout
      console.log("Request was canceled due to timeout");
    } else {
      // Request failed for other reasons (e.g., network error, 4xx/5xx response, etc.)
      console.error("Request failed:", error);
    }
  }
};
const logOutUser = async () => {
  try {
    const response = await axiosBase({
      method: "POST",
      url: `user/log-out`,
    });
    return response.data;
  } catch (error) {
    if (axios.isCancel(error)) {
      // Request was canceled due to timeout
      console.log("Request was canceled due to timeout");
    } else {
      // Request failed for other reasons (e.g., network error, 4xx/5xx response, etc.)
      console.error("Request failed:", error);
    }
  }
};
const updateUser = async (data) => {
  const { name, email, phone, password, address, avatar, apiUrl } = data;
  try {
    const response = await axiosBase({
      method: "PUT",
      url: apiUrl,
      data: {
        name,
        email,
        phone,
        password,
        address,
        avatar,
      },
    });
    return response.data;
  } catch (error) {
    if (axios.isCancel(error)) {
      // Request was canceled due to timeout
      console.log("Request was canceled due to timeout");
    } else {
      // Request failed for other reasons (e.g., network error, 4xx/5xx response, etc.)
      console.error("Request failed:", error);
    }
  }
};
export {
  loginUser,
  signUpUser,
  getDetailUser,
  refreshToken,
  logOutUser,
  updateUser,
};
