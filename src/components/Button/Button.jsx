import React from "react";
import PropTypes from "prop-types";
import { SMALL_SIZED_BUTTON } from "./constants";
import "./styles.css";

function Button({ size, label, onClick }) {
  const sizeButton = size === SMALL_SIZED_BUTTON ? "small-button" : "large-button";

  return (
    <button onClick={onClick} className={`button-pattern ${sizeButton}`}>
      <span>{label}</span>
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["small", "large"]),
  onClick: PropTypes.func,
};

Button.defaultProps = {
  size: "small",
};

export default Button;
