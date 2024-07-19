import React from "react";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "../../../commons/constants/routes-path";
import Layout from "../../../containers/Layout";
import { ReactComponent as RegisterProjectBG } from "../../../assets/images/bg-register-project.svg";

function RegisterProject() {
  const navigate = useNavigate();
  return (
    <Layout image={RegisterProjectBG}>
      <button onClick={() => navigate(ROUTE_PATHS.home)}>Voltar</button>
      <p>RegisterProject</p>
    </Layout>
  );
}

export default RegisterProject;
