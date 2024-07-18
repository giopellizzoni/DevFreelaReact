import React from "react";
import { useNavigate } from "react-router-dom";
import PageTitle from "../../components/PageTitle/PageTitle";
import ProjectTable from "../../containers/ProjectTable/ProjectTable";
import { PROJECT_DATA } from "./constants";
import { ROUTE_PATHS } from "../../commons/constants/routes-path";

function App() {
  const navigate = useNavigate();

  const actionButtonProps = {
    label: "Novo projeto",
    action: () => navigate(`${ROUTE_PATHS.projects}/new-project`),
  };
  return (
    <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
      <div style={{ width: "800px", paddingTop: "48px" }}>
        <PageTitle title="Projetos" actionButton={actionButtonProps} />
        <ProjectTable projectData={PROJECT_DATA} />
      </div>
    </div>
  );
}

export default App;
