import ProductDetailPage from "../pages/ProductDetailPage/ProductDetailPage";
import TypeProductPage from "../pages/TypeProductPage/TypeProductPage";
import HomePage from "../pages/homePage/HomePage";
import NotFoundPage from "../pages/notFoundPage/NotFoundPage";
import OrderPage from "../pages/orderPage/OrderPage";
import ProductPage from "../pages/productPage/ProductPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import AdminPage from "../pages/AdminPage/AdminPage";

export const publicRoutes = [
  { path: "/", element: HomePage, isShowHeader: true },
  { path: "/order", element: OrderPage, isShowHeader: true },
  {
    path: "/product/detail/:productId",
    element: ProductDetailPage,
    isShowHeader: true,
  },
  { path: "/product/:type", element: TypeProductPage, isShowHeader: true },
  { path: "/product", element: ProductPage, isShowHeader: true },
  { path: "/profile", element: ProfilePage, isShowHeader: true },
  { path: "*", element: NotFoundPage },
];
export const privateRoutes = [
  { path: "/system/admin", element: AdminPage, isShowHeader: true },
];
