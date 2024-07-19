import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageTitle from "../../../components/PageTitle/PageTitle";
import ProjectTable from "../../../containers/ProjectTable/ProjectTable";
import { ROUTE_PATHS } from "../../../commons/constants/routes-path";
import ProjectServices from "../../../services/projects";

function ListProject() {
  const navigate = useNavigate();
  const [projectList, setProjectList] = useState([]);

  const getProjects = () => {
    ProjectServices.getProjects()
      .then(({ data }) => {
        setProjectList(data);
      })
      .catch((error) => console.log("Erro na requisição", error));
  };

  useEffect(() => {
    getProjects();
  }, []);

  const actionButtonProps = {
    label: "Novo projeto",
    action: () => navigate(`${ROUTE_PATHS.projects}/new-project`),
  };

  const onDelete = (projectId) => {
    ProjectServices.deleteProject(projectId)
      .then(() => {
        getProjects();
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
      <div style={{ width: "800px", paddingTop: "48px" }}>
        <PageTitle title="Projetos" actionButton={actionButtonProps} />
        <ProjectTable projectData={projectList} onDelete={onDelete} />
      </div>
    </div>
  );
}

export default ListProject;
