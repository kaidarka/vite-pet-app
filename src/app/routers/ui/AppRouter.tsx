import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { MainPage } from "pages/main";
import { routeConfig } from "shared/config";

const router = createBrowserRouter([
  { path: routeConfig.root, Component: MainPage },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
