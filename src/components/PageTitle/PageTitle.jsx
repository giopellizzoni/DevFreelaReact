import React from "react";
import PropTypes from "prop-types";
import Button from "../Button";
import "./styles.css";

function PageTitle({ title, actionButton }) {
  return (
    <div className="page-title-container">
      <h1>{title}</h1>
      {actionButton && <Button label={actionButton.label} size="small" onClick={actionButton.action} />}
    </div>
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
