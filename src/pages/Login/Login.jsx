import { Typography, Grid } from "@mui/material";
import { Form, Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as UserRegisterBG } from "../../assets/images/bg-register-user.svg";
import { ROUTE_PATHS } from "../../commons/constants/routes-path";
import Button from "../../components/Button";
import Input from "../../components/Form/Input";
import Layout from "../../containers/Layout";
import { INITIAL_VALUES } from "./constants";
import { validateForm } from "./schemes";

function Login() {
  const navigate = useNavigate();

  const onSubmit = () => {
    navigate(ROUTE_PATHS.projects);
  };

  return (
    <Layout image={UserRegisterBG}>
      <Formik
        onSubmit={onSubmit}
        initialValues={INITIAL_VALUES}
        validationSchema={validateForm}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <div className="w-100 mb-3">
              <Typography variant="h2" fontWeight="bold">
                Entre ou faça seu cadastro
              </Typography>
            </div>

            <div className="w-75 mb-3">
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Input name="email" label="E-mail" />
                </Grid>
                <Grid item xs={12}>
                  <Input name="password" label="Senha" type="password" />
                </Grid>
              </Grid>
            </div>
            <div className="w-75 mb-3">
              <Button
                className="py-2 mb-3"
                size="large"
                fullWidth
                type="submit"
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
          </Form>
        )}
      </Formik>
    </Layout>
  );
}

export default Login;
