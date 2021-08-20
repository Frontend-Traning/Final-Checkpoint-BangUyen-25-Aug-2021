import React, { useEffect } from "react";

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

export default Button;
