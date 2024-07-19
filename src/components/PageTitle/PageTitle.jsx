import React from "react";
import { Typography } from "@mui/material";
import PropTypes from "prop-types";
import Button from "../Button";
import { PageTitleContainerStyled } from "./styles";

function PageTitle({ title, actionButton }) {
  return (
    <PageTitleContainerStyled>
      <Typography variant="h4" fontWeight="bold">{title}</Typography>
      {actionButton && (
        <Button onClick={actionButton.action}>{actionButton.label}</Button>
      )}
    </PageTitleContainerStyled>
  );
}

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
  actionButton: PropTypes.shape({
    label: PropTypes.string,
    action: PropTypes.func,
  }),
};

export default PageTitle;
