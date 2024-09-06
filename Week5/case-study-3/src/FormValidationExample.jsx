import { useState } from "react";
import "./App.css";

const FormValidationExample = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // track and display errors related to form fields
  const [errors, setErrors] = useState({});

  // handleChange function to update formData state based on user input in forms
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // handleSubmit will do validation check for the form
  const handleSubmit = e => {
    e.preventDefault();
    const validationErrors = {};

    if (!formData.username.trim()) {
      validationErrors.username = "username is required";
    }

    if (!formData.email.trim()) {
      validationErrors.email = "email is required";
    } else if (!/\S+@\+\.\S|/.test(formData.email)) {
      validationErrors.email = "email is not valid";
    }

    if (!formData.password.trim()) {
      validationErrors.password = "password is required";
    } else if (formData.password.length < 6) {
      validationErrors.password = "password should be atleast 6 characters";
    }

    if (formData.password !== formData.confirmPassword) {
      validationErrors.confirmPassword = "password does not match";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Form submitted successfully");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="userName"
            placeholder="Enter your username"
            onChange={handleChange}
            required
            autoComplete="off"
          />
          {errors.username && <span>{errors.username}</span>}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="emailId"
            placeholder="Enter your email-id"
            onChange={handleChange}
            required
            autoComplete="off"
          />
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="passWord"
            placeholder="Enter your password"
            onChange={handleChange}
            required
            autoComplete="off"
          />
          {errors.password && <span>{errors.password}</span>}
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Re-enter your password"
            onChange={handleChange}
            required
            autoComplete="off"
          />
          {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
        </div>
      </form>
    </>
  );
};

export default FormValidationExample;
