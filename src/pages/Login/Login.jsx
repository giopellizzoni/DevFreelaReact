import React from "react";
import { useNavigate } from "react-router-dom";
import { Typography, TextField } from "@mui/material";
import Layout from "../../containers/Layout";
import { ReactComponent as UserRegisterBG } from "../../assets/images/bg-register-user.svg";
import Button from "../../components/Button";
import { ROUTE_PATHS } from "../../commons/constants/routes-path";

function Login() {
  const navigate = useNavigate();
  return (
    <Layout image={UserRegisterBG}>
      <div className="w-100 mb-3">
        <Typography variant="h2" fontWeight="bold">
          Entre ou faça seu cadastro
        </Typography>
      </div>

      <div className="w-75 mb-3">
        <TextField className="w-100 mb-2" label="Email" variant="standard" />
        <TextField className="w-100 mb-2" label="Senha" variant="standard" />
      </div>
      <div className="w-75 mb-3">
        <Button
          className="py-2 mb-3"
          size="large"
          fullWidth
          onClick={() => navigate(ROUTE_PATHS.projects)}
        >
          Entrar
        </Button>
        <Button
          className="py-2"
          size="large"
          fullWidth
          variant="text"
          onClick={() => navigate(`${ROUTE_PATHS.users}/new-user`)}
        >
          Cadastrar
        </Button>
      </div>
    </Layout>
  );
}

export default Login;
