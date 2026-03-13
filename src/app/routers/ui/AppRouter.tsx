import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { MainPage } from "pages/main";
import { AboutPage } from "pages/about";
import { routeConfig } from "shared/config";

const router = createBrowserRouter([
  { path: routeConfig.root, Component: MainPage },
  { path: routeConfig.about, Component: AboutPage },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
