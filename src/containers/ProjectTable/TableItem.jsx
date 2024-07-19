import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { Grid, Typography, IconButton } from "@mui/material";
import { ReactComponent as PencilIcon } from "../../assets/images/icon-pencil.svg";
import { ReactComponent as TrashIcon } from "../../assets/images/icon-trash.svg";
import {
  TableLineStyled,
  ValueColumnStyled,
  ActionColumnStyled,
} from "./styles";

import { formatCurrency } from "../../commons/utils/money";
import { ROUTE_PATHS } from "../../commons/constants/routes-path";

function TableItem({ title, description, value, onDelete, projectId }) {
  const navigate = useNavigate();

  return (
    <TableLineStyled container>
      <Grid item xs={7}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1">{description}</Typography>
      </Grid>
      <ValueColumnStyled item xs={3}>
        <Typography variant="body1" fontWeight="bold">
          {formatCurrency(value)}
        </Typography>
      </ValueColumnStyled>
      <ActionColumnStyled item xs={2}>
        <IconButton onClick={() => navigate(`${ROUTE_PATHS.projects}/${projectId}`)}>
          <PencilIcon />
        </IconButton>
        <IconButton onClick={() => onDelete(projectId)}>
          <TrashIcon />
        </IconButton>
      </ActionColumnStyled>
    </TableLineStyled>
  );
}

TableItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
  projectId: PropTypes.string.isRequired,
};

export default TableItem;
