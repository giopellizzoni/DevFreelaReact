import React from "react";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "../../../commons/constants/routes-path";
import Layout from "../../../containers/Layout";
import { ReactComponent as RegisterProjectBG } from "../../../assets/images/bg-register-project.svg";
import Button from "../../../components/Button";
import { Typography, TextField } from "@mui/material";

function RegisterProject() {
  const navigate = useNavigate();
  return (
    <Layout image={RegisterProjectBG}>
      <div className="w-75 mb-3">
        <Typography variant="h2" fontWeight="bold">
          Vamos cadastrar seu novo projeto
        </Typography>
      </div>

      <div className="w-50 mb-3">
        <TextField
          className="w-100 mb-2"
          label="Titulo"
          variant="standard"
        />
        <TextField
          className="w-100 mb-2"
          label="Custo Total"
          variant="standard"
        />
        <TextField className="w-100 mb-2" label="Descrição" variant="standard" />
      </div>
      <div className="w-50 mb-3">
        <Button
          className="py-2"
          size="large"
          fullWidth
          onClick={() => navigate(ROUTE_PATHS.projects)}
        >
          Cadastrar
        </Button>
      </div>
    </Layout>
  );
}

export default RegisterProject;
