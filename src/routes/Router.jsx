import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Layout from "../pages/layout/Layout";
import DishSearch from "../pages/dishSearch/DishSearch";
import Orders from "../pages/orders/Orders";
import UserProfile from "../pages/userProfile/UserProfile";
import AddNewCard from "../pages/addNewCard/AddNewCard";
import Cart from "../pages/cart/Cart";
import DishInfo from "../pages/dishInfo/DishInfo";
import EditUserInfo from "../pages/editUserInfo/EditUserInfo";
import OrderStatus from "../pages/orderStatus/OrderStatus";
import PaymentMethods from "../pages/paymentMethods/PaymentMethods";
import RestaurantInfo from "../pages/restaurantInfo/RestaurantInfo";
import SignIn from "../pages/signIn/SignIn";
import SignUp from "../pages/signUp/SignUp";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Loader from "../components/loader/Loader";
import { login } from "../store/slides/user/user";
import PublicRoute from "./PublicRoutes";
import PrivateRoute from "./PrivateRoutes";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "search",
//         element: <DishSearch />,
//       },
//       {
//         path: "orders",
//         element: <Orders />,
//       },
//       {
//         path: "profile/:id",
//         element: <UserProfile />,
//       },
//     ],
//   },
// ]);

const Router = () => {
  const { isLogged } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [validateRoutes, setValidateRoutes] = useState(false);

  useEffect(() => {
    console.log("isLogged", isLogged);
    validateUser();
  }, []);

  const validateUser = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    user && dispatch(login(user));
    setValidateRoutes(true);
  };

  return (
    <BrowserRouter>
      {validateRoutes ? (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="search" element={<DishSearch />} />
            <Route path=":restaurant/:id" element={<DishInfo />} />
            <Route path=":restaurant" element={<RestaurantInfo />} />
            <Route element={<PrivateRoute isLoggedIn={isLogged} />}>
              <Route path="orders" element={<Orders />} />
              <Route path="profile/:id" element={<UserProfile />} />
              <Route path="add-new-card" element={<AddNewCard />} />
              <Route path="new-order" element={<Cart />} />
              <Route path="edit-profile" element={<EditUserInfo />} />
              <Route path="order-status" element={<OrderStatus />} />
              <Route path="payment-methods" element={<PaymentMethods />} />
            </Route>
          </Route>
          <Route element={<PublicRoute isLoggedIn={isLogged} />}>
            <Route path="sign-in" element={<SignIn />} />
            <Route path="sign-up" element={<SignUp />} />
          </Route>
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Loader />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};

export default Router;
