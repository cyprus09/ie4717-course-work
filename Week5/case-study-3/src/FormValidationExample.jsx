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
    } else if (!/[0-9]/.test(formData.password)) {
      validationErrors.password = "password should have atleast one number";
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(formData.password)) {
      validationErrors.password = "password should have atleast one special character";
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
      <div className="form-holder">
        <div className="form-content">
          <div className="form-items">
            <h3>Register Now</h3>
            <form onSubmit={handleSubmit}>
              <input
                className="form-control"
                onChange={handleChange}
                type="text"
                name="username"
                placeholder="Enter your Full Name"
                required
              />
              {errors.username && <span>{errors.username}</span>}

              <input
                className="form-control"
                onChange={handleChange}
                type="email"
                name="email"
                placeholder="Enter your Email-ID"
                required
              />
              {errors.email && <span>{errors.email}</span>}

              <input
                className="form-control"
                onChange={handleChange}
                type="password"
                name="password"
                placeholder="Enter your Password"
                required
              />
              {errors.password && <span>{errors.password}</span>}

              <input
                className="form-control"
                onChange={handleChange}
                type="password"
                name="confirmPassword"
                placeholder="Re-enter your Password"
                required
              />
              {errors.confirmPassword && <span>{errors.confirmPassword}</span>}

              <div className="form-check">
                <br />
                <input className="form-check-input" type="checkbox" required />I confirm that all data entered is
                correct
              </div>

              <button id="submit" type="submit" className="btn btn-primary">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormValidationExample;
