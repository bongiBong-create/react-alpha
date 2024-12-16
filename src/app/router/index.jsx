import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProductsPage } from "../../pages/products-page";
import { ProductDetailsPage } from "../../pages/product-details-page";
import { ProductCreatePage } from "../../pages/product-create-page/ui";
import { MainLayout } from "../../shared/ui/main-layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <ProductsPage />,
      },
      {
        path: "/products/:id",
        element: <ProductDetailsPage />,
      },
      {
        path: "/products/create",
        element: <ProductCreatePage />,
      },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
