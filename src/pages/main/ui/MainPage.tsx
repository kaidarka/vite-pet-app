import { Link } from "react-router";
import { routeConfig } from "shared/config";

export const MainPage = () => {
  return (
    <div>
      <h1>Main page</h1>
      <Link to={routeConfig.about}>Link to about</Link>
    </div>
  );
};
