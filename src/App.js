import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import RootLayout from "./Pages/RootLayout";
import ErrorPage from "./Pages/ErrorPage";
import Product from "./Pages/Product";
import ProductDetail from "./Pages/ProductDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      // The index route is the default route that will be rendered when the path is "/"
      { index: true, element: <Home /> },
      { path: "About", element: <About /> },
      { path: "Product", element: <Product /> },
      { path: "Product/:productId", element: <ProductDetail /> },
      // The above path will match any product detail page with a dynamic productID
      // : is a place holder for a dynamic segment in the URL.
      // : is very important, it tells react-router that this is a dyanamic segment
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
