import React from "react";
import PropTypes from "prop-types";
import TableItem from "./TableItem";
import "./styles.css";

function ProjectTable({ projectData }) {
  return (
    <div className="table-container">
      <div>
        <div className="row">
          <div className="col-7 description-column">
            <h4>Título</h4>
          </div>
          <div className="col-3 value-column">
            <h4>Custo total</h4>
          </div>
          <div className="col-2 action-column">
            <h4>Ações</h4>
          </div>
        </div>
      </div>
      {projectData?.map(({ name, description, value }) => (
        <TableItem
          key={name}
          name={name}
          description={description}
          value={value}
        />
      ))}
    </div>
  );
}

ProjectTable.propTypes = {
  projectData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ProjectTable;
