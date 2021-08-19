import React from "react";
import useValidateForm from "../../hook/useValidateForm";
import validateInfo from "../../helper/vadidationInfo";
import "./style.scss";
const InputGroup = () => {
  const [value, error, handleOnchange, handleSubmit] =
    useValidateForm(validateInfo);
  return (
    <form className="container" onSubmit={handleSubmit}>
      <div className="input">
        <label>Email</label>
        <input
          type="text"
          placeholder="email address"
          name="email"
          value={value.email}
          onChange={handleOnchange}
        />
        {error.email && <div className="invalid">{error.email}</div>}
        {error.required && <div className="invalid">{error.required}</div>}
      </div>
      <div className="input">
        <label>Password</label>
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={handleOnchange}
        />
        {error.password && <div className="invalid">{error.password}</div>}
        {error.required && <div className="invalid">{error.required}</div>}
      </div>

      <div className="input">
        <button className="submit" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default InputGroup;
