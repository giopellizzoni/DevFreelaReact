import React from "react";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "../../../commons/constants/routes-path";
import Layout from "../../../containers/Layout";
import { ReactComponent as EditProjectBG } from "../../../assets/images/bg-edit-project.svg";
import { Typography, TextField } from "@mui/material";
import Button from "../../../components/Button";

function EditProject() {
  const navigate = useNavigate();
  return (
    <Layout image={EditProjectBG}>
       <div className="w-75 mb-3">
        <Typography variant="h2" fontWeight="bold">
          Editar projeto
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
          Salvar
        </Button>
      </div>
    </Layout>
  );
}

export default EditProject;
