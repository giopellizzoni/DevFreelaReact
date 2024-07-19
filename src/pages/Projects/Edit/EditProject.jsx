import React from "react";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "../../../commons/constants/routes-path";
import Layout from "../../../containers/Layout";
import { ReactComponent as EditProjectBG } from "../../../assets/images/bg-edit-project.svg";

function EditProject() {
  const navigate = useNavigate();
  return (
    <Layout image={EditProjectBG}>
      <button onClick={() => navigate(ROUTE_PATHS.home)}>Voltar</button>
      <p>EditProject</p>
    </Layout>
  );
}

export default EditProject;
