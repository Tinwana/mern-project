import { Fragment, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import jwtDecoded from "jwt-decode";
import { publicRoutes } from "./routes";
import DefaultComponents from "./components/DefaultComponents/DefaultComponents";
import isJsonString from "./utils/IsJsonString";
import { axiosJwt, getDetailUser, refreshToken } from "./Service/UserService";
import { updateUser } from "./redux/slides/userSlide";
import { useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const { decoded, storageData } = handleDecoded();
    if (decoded?.payload?.id) {
      handleGetDetailUser(decoded?.payload.id, storageData);
    } else return;
  }, []);

  const handleDecoded = () => {
    let storageData = localStorage.getItem("access_token");
    const decoded = jwtDecoded(storageData);
    if (storageData && isJsonString(storageData)) {
      storageData = JSON.parse(storageData);
    }
    return { decoded, storageData };
  };

  // axiosJwt.interceptors.request.use( async (config)=> {
  //   const { decoded, storageData } = handleDecoded();
  //   const currentTime = new Date()
  //   if(decoded?.exp < currentTime.getTime()/1000){
  //     const data = await refreshToken()
  //     if(data){
  //       config.headers['token'] = `bearer ${data?.access_token}`
  //     }
  //   }
  //   return config;
  // }, function (error) {
  //   return Promise.reject(error);
  // });

  const handleGetDetailUser = async (id, token) => {
    const res = await getDetailUser(id, token);
    if (res.status === "error") return;
    dispatch(updateUser({ ...res?.data, access_token: token }));
  };

  return (
    <>
      <Router>
        <Routes>
          {publicRoutes.map((route) => {
            const Layout = route.isShowHeader ? DefaultComponents : Fragment;
            return (
              <Route
                key={route.path}
                path={route.path}
                element={
                  <Layout>
                    <route.element />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </Router>
    </>
  );
}

export default App;
