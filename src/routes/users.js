import { lazy } from "react";
import { ROUTE_PATHS } from "../commons/constants/routes-path";

const UsersRegister = lazy(async () => await import("../pages/Users/Register"));

const users = [{ path: `${ROUTE_PATHS.users}/new-user`, component: UsersRegister, exact: true }];

export default users;
