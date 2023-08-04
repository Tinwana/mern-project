import axios from "axios";
import { BASE_URL } from "../../public/env";
export const axiosJwt = axios.create()

const loginUser = async (data)=> {
        const {apiUrl,email,password} = data;
        const response = await axios({
          method: "POST",
          url: apiUrl,
          data: {
            email,
            password,
          },
        });
        return response.data
}
const signUpUser = async (data)=> {
        const {apiUrl,email,password,passwordConfirm} = data;
        const response = await axios({
          method: "POST",
          url: apiUrl,
          data: {
            email,
            password,
            passwordConfirm
          },
        });
        return response.data
}
const getDetailUser = async (id,access_token)=> {
    const response = await axiosJwt({
      method: "GET",
      url: `${BASE_URL}/user/get-detail/${id}`,
      data: {
        id
      },
      headers:{
        token:`bearer ${access_token}`
      }
    });
    return response.data
}

const refreshToken = async (token)=> {
  const response = await axios({
    method: "POST",
    withCredentials: true,
    url: `${BASE_URL}/user/refresh-token`,
  });
  console.log(response.data);
  return response.data
}
export {
    loginUser,
    signUpUser,
    getDetailUser,
    refreshToken
}
