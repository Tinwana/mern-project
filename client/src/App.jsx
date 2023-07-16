import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";
import DefaultComponents from "./components/DefaultComponents/DefaultComponents";
function App() {
  return (
    <>
      <Router>
        <Routes>
          {
            publicRoutes.map((route)=> {
            const Layout = route.isShowHeader ? DefaultComponents : Fragment
              return (
                <Route key={route.path} path={route.path} element={<Layout>
                  <route.element />
                </Layout>} />
              )
            })  
          }
        </Routes>
      </Router>
    </>
  );
}

export default App;
