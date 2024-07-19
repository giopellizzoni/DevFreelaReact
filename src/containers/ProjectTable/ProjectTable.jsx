import React from "react";
import PropTypes from "prop-types";
import { Grid, Typography } from "@mui/material";
import TableItem from "./TableItem";
import {
  TableContainerStyled,
  ValueColumnStyled,
  ActionColumnStyled,
} from "./styles";
import { SANTAS_GRAY } from "../../commons/constants/colors";

function ProjectTable({ projectData }) {
  return (
    <TableContainerStyled>
      <div>
        <Grid container>
          <Grid item xs={7}>
            <Typography color={SANTAS_GRAY} fontWeight="bold">Título</Typography>
          </Grid>
          <ValueColumnStyled item xs={3}>
            <Typography color={SANTAS_GRAY} fontWeight="bold">Custo total</Typography>
          </ValueColumnStyled>
          <ActionColumnStyled item xs={2}>
            <Typography color={SANTAS_GRAY} fontWeight="bold">Ações</Typography>
          </ActionColumnStyled>
        </Grid>
      </div>
      {projectData?.map(({ name, description, value }) => (
        <TableItem
          key={name}
          name={name}
          description={description}
          value={value}
        />
      ))}
    </TableContainerStyled>
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
