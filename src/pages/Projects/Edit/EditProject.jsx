import { Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as EditProjectBG } from "../../../assets/images/bg-edit-project.svg";
import Button from "../../../components/Button";
import Layout from "../../../containers/Layout";
import { Form, Formik } from "formik";
import Input from "../../components/Form/Input";
import { INITIAL_VALUES } from "../constants";
import { validateForm } from "../schemes";
import { ROUTE_PATHS } from "../../../commons/constants/routes-path";

function EditProject() {
  const navigate = useNavigate();

  const onSubmit = () => {
    navigate(ROUTE_PATHS.projects);
  };

  return (
    <Layout image={EditProjectBG}>
      <div className="w-75 mb-3">
        <Typography variant="h2" fontWeight="bold">
          Editar projeto
        </Typography>
      </div>

      <Formik
        onSubmit={onSubmit}
        initialValues={INITIAL_VALUES}
        validationSchema={validateForm}
      >
        {({ handleSubmit }) => <Form onSubmit={handleSubmit}></Form>}

        <div className="w-75 mb-3">
          <Typography variant="h2" fontWeight="bold">
            Editar projeto
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
          <Button className="py-2" size="large" fullWidth type="submit">
            Cadastrar
          </Button>
        </div>
      </Formik>
    </Layout>
  );
}

export default EditProject;
