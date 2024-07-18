import React from "react";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "../../../commons/constants/routes-path";

function RegisterProject() {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate(ROUTE_PATHS.home)}>Voltar</button>
      <p>RegisterProject</p>
    </>
  );
}

export default RegisterProject;
