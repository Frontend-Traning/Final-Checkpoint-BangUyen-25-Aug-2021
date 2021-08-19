import { useState } from "react";

const useValidateForm = (validate) => {
  const [value, setValue] = useState({});
  const [error, setError] = useState({});
  const handleOnchange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
    setError(validate({ [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const key = Object.keys(value);
    if (key.length !== 0) {
      setError(validate(value));
    } else {
      setError({ require: "This field is required" });
    }
  };
  return [value, error, handleOnchange, handleSubmit];
};

export default useValidateForm;
