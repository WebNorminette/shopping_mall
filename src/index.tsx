import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";

import "./index.css";
import App from "./App";

import reportWebVitals from "./reportWebVitals";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound";
import AllProducts from "./pages/AllProducts";
import ProtectedRoute from "./pages/ProtectedRoute";
import NewProduct from "./pages/NewProduct";
import ProductDetail from "./pages/productDetail/ProductDetail";
import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: (
      <App>
        <NotFound />
      </App>
    ),
    children: [
      { index: true, path: "/", element: <Home /> },
      { path: "/products", element: <AllProducts /> },
      {
        path: "/products/new",
        element: (
          <ProtectedRoute requireAdmin>
            <NewProduct />
          </ProtectedRoute>
        ),
      },
      {
        path: "/products/:id",
        element: <ProductDetail />,
      },
      {
        path: "/account",
        element: <Login />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <RecoilRoot>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </RecoilRoot>
);

reportWebVitals();
