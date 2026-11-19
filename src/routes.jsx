import Layout from "./components/layout/Layout.jsx";
import Home from "./pages/Home.jsx";
import DesignSystem from "./pages/DesignSystem.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import ShopPage from "./pages/ShopPage.jsx";
import CartPage from "./pages/CartPage.jsx";

const routes = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "shop", element: <ShopPage /> },
      { path: "your-cart", element: <CartPage /> },
      { path: "design-system", element: <DesignSystem /> },
    ],
  },
];

export default routes;
