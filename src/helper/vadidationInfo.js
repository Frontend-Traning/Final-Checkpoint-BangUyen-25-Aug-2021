import { emailRegex } from "../consts/regex";
export default function validateInfo(values) {
  let errors = {};
  let { email, password } = values;
  const key = Object.keys(values);
  console.log(values);
  if (key.indexOf("email") !== -1) {
    if (!email || !email.trim()) {
      errors.email = "This field is required";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "Email address is invalid";
    }
  }
  if (key.indexOf("password") !== -1) {
    if (!password) {
      errors.password = "This field is required";
    } else if (password.length < 6) {
      errors.password = "Password needs to be 6 characters or more";
    }
  }
  return errors;
}
