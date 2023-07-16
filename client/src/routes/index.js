import HomePage from "../pages/homePage/HomePage";
import NotFoundPage from "../pages/notFoundPage/NotFoundPage";
import OrderPage from "../pages/orderPage/OrderPage";
import ProductPage from "../pages/productPage/ProductPage";

export const publicRoutes = [
    {path:'/', element:HomePage, isShowHeader:true},
    {path:'/order', element:OrderPage, isShowHeader:true},
    {path:'/product', element:ProductPage, isShowHeader:true},
    {path:'*', element:NotFoundPage}

]