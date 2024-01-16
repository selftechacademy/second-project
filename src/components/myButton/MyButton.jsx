import React from "react";
import PropTypes from "prop-types";
import "./myButton.style.css";

const MyButton = ({ variant = "square", text, onClickHandler }) => {
  return (
    <button className={variant} onClick={onClickHandler}>
      {text}
    </button>
  );
};

MyButton.propTypes = {
  variant: PropTypes.oneOf(["square", "rounded"]),
  text: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func.isRequired,
};

export default MyButton;
