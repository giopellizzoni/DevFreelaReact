import { lazy } from "react";
import { ROUTE_PATHS } from "../commons/constants/routes-path";

const RegisterProject = lazy(
  async () => await import("../pages/Projects/Register")
);
const EditProject = lazy(async () => await import("../pages/Projects/Edit"));

const ListProjects = lazy(async () => await import("../pages/Projects/List"));

const projects = [
  {
    path: `${ROUTE_PATHS.projects}/new-project`,
    component: RegisterProject,
    exact: true,
  },
  {
    path: `${ROUTE_PATHS.projects}/:idProject`,
    component: EditProject,
    exact: true,
  },
  {
    path: `${ROUTE_PATHS.projects}`,
    component: ListProjects,
    exact: true,
  },
];

export default projects;
