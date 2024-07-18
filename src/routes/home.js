import { lazy } from "react";
import { ROUTE_PATHS } from "../commons/constants/routes-path";

const Home = lazy(async () => await import("../pages/Home"));

const home = [{ path: ROUTE_PATHS.home, component: Home, exact: true }];

export default home;
