import AdminProduct from "../components/AdminProduct/AdminProduct";
import AdminUser from "../components/AdminUser/AdminUser";
import ProfilePage from "../pages/ProfilePage/ProfilePage";

const renderPage = (key) => {
  switch (key) {
    case "home":
      return <ProfilePage />;
    case "user":
      return <AdminUser />;
    case "products":
      return <AdminProduct />;
    default:
      return <></>;
  }
};

export default renderPage;
