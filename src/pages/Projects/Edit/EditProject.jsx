import { Grid, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ReactComponent as EditProjectBG } from "../../../assets/images/bg-edit-project.svg";
import { ROUTE_PATHS } from "../../../commons/constants/routes-path";
import Button from "../../../components/Button";
import Layout from "../../../containers/Layout";
import Input from "../../../components/Form/Input";
import { INITIAL_VALUES } from "../constants";
import { validateForm } from "../schemes";
import ProjectServices from "../../../services/projects";

function EditProject() {
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState();
  const { idProject } = useParams();

  const onSubmit = (values) => {
    ProjectServices.updateProject(idProject, { ...values, value: parseInt(values.value) })
      .then(() => {
        navigate(ROUTE_PATHS.projects);
      })
      .catch((error) => alert(error.message));
  };


  useEffect(() => {
    ProjectServices.getProjectsById(idProject)
      .then(({ data }) => {
        setSelectedProject(data);
      })
      .catch((error) => console.log("Erro na requisição: ", error));
      
  }, [idProject]);

  return (
    <Layout image={EditProjectBG}>
      <Formik
        onSubmit={onSubmit}
        initialValues={selectedProject ?? INITIAL_VALUES}
        validationSchema={validateForm}
        enableReinitialize
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
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

export default EditProject;
