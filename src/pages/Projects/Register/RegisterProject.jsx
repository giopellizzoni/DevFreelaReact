import { Grid, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as RegisterProjectBG } from "../../../assets/images/bg-register-project.svg";
import { ROUTE_PATHS } from "../../../commons/constants/routes-path";
import Button from "../../../components/Button";
import Layout from "../../../containers/Layout";
import Input from "../../../components/Form/Input";
import { INITIAL_VALUES } from "../constants";
import { validateForm } from "../schemes";
import ProjectServices from "../../../services/projects";

function RegisterProject() {
  const navigate = useNavigate();

  const onSubmit = (values) => {
    ProjectServices.saveProject({ ...values, value: parseInt(values.value) })
      .then(() => {
        navigate(ROUTE_PATHS.projects);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <Layout image={RegisterProjectBG}>
      <Formik
        onSubmit={onSubmit}
        initialValues={INITIAL_VALUES}
        validationSchema={validateForm}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <div className="w-75 mb-3">
              <Typography variant="h2" fontWeight="bold">
                Vamos cadastrar seu novo projeto
              </Typography>
            </div>

            <div className="w-50 mb-3">
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Input name="title" label="Título" />
                </Grid>
                <Grid item xs={12}>
                  <Input name="value" label="Custo Total" />
                </Grid>
                <Grid item xs={12}>
                  <Input name="description" label="Descrição" />
                </Grid>
              </Grid>
            </div>
            <div className="w-50 mb-3">
              <Button
                className="py-2 mb-3"
                size="large"
                fullWidth
                type="submit"
              >
                Cadastrar
              </Button>
              <Button
                className="py-2"
                size="large"
                fullWidth
                variant="text"
                onClick={() => navigate(ROUTE_PATHS.projects)}
              >
                Voltar
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </Layout>
  );
}

export default RegisterProject;
