import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Layout from "../pages/layout/Layout";
import DishSearch from "../pages/dishSearch/DishSearch";
import Orders from "../pages/orders/Orders";
import UserProfile from "../pages/userProfile/UserProfile";
import AddNewCard from "../pages/addNewCard/AddNewCard";
import Cart from "../pages/cart/Cart";

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
