import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
  TextField,
} from "@mui/material";
import Layout from "../../../containers/Layout";
import { ReactComponent as UserRegisterBG } from "../../../assets/images/bg-register-user.svg";
import Button from "../../../components/Button";
import { ROUTE_PATHS } from "../../../commons/constants/routes-path";

function RegisterUser() {
  const navigate = useNavigate();
  return (
    <Layout image={UserRegisterBG}>
      <div className="w-100 mb-3">
        <Typography variant="h2" fontWeight="bold">
          Olá
        </Typography>
        <Typography variant="h4" fontWeight="bold">
          Vamos Criar seu cadastro.
        </Typography>
      </div>

      <div className="w-100 mb-3">
        <Typography variant="body1" fontWeight="bold">
          Qual o seu perfil?
        </Typography>

        <FormControl>
          <RadioGroup row>
            <FormControlLabel value="dev" control={<Radio />} label="Dev" />
            <FormControlLabel
              value="customer"
              control={<Radio />}
              label="Cliente"
            />
          </RadioGroup>
        </FormControl>
      </div>
      <div className="w-75 mb-3">
        <TextField
          className="w-100 mb-2"
          label="Nome completo"
          variant="standard"
        />
        <TextField
          className="w-100 mb-2"
          label="Data de Nascimento"
          variant="standard"
        />
        <TextField className="w-100 mb-2" label="Email" variant="standard" />
        <TextField className="w-100 mb-2" label="Senha" variant="standard" />
      </div>
      <div className="w-75 mb-3">
        <Button className="py-2" size="large" fullWidth onClick={() => navigate(ROUTE_PATHS.projects)}>
          Cadastrar
        </Button>
      </div>
    </Layout>
  );
}

export default RegisterUser;
