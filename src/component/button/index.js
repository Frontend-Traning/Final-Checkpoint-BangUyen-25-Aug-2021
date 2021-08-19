import React, { useEffect } from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  const { disabled, handleClick, title, className } = props;
  useEffect(() => {
    console.log(title, disabled);
  }, [disabled, title]);
  return (
    <button disabled={disabled} onClick={handleClick} className={className}>
      {title}
    </button>
  );
};

Button.propTypes = {};

export default Button;
