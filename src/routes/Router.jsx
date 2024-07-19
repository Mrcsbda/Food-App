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
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="search" element={<DishSearch />} />
          <Route path="orders" element={<Orders />} />
          <Route path="profile/:id" element={<UserProfile />} />
          <Route path="add-new-card" element={<AddNewCard />} />
          <Route path="new-order" element={<Cart />} />
          <Route path=":restaurant/:id" element={<DishInfo />} />
          <Route path="edit-profile" element={<EditUserInfo />} />
          <Route path="order-status" element={<OrderStatus />} />
          <Route path="payment-methods" element={<PaymentMethods />} />
          <Route path=":restaurant" element={<RestaurantInfo />} />
        </Route>
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
