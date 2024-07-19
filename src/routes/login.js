import { lazy } from "react";
import { ROUTE_PATHS } from "../commons/constants/routes-path";

const Login = lazy(async () => await import("../pages/Login"));

const login = [{ path: ROUTE_PATHS.home, component: Login, exact: true }];

export default login;
