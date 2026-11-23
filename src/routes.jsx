import Layout from "./components/layout/Layout.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import ShopPage from "./pages/ShopPage.jsx";
import CartPage from "./pages/CartPage.jsx";

const routes = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <ShopPage /> },
      { path: "your-cart", element: <CartPage /> },
    ],
  },
];

export default routes;
