import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    otp: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleNext = () => {
    if (step === 1) {
      if (
        formData.firstName &&
        formData.lastName &&
        formData.mobile.length === 10
      ) {
        setStep(2);
      } else {
        Swal.fire({
          icon: "warning",
          title: "Incomplete Info",
          text: "Please fill all details correctly.",
        });
      }
    } else if (step === 2) {
      if (/^\d{6}$/.test(formData.otp)) {
        setStep(3);
      } else {
        Swal.fire({
          icon: "error",
          title: "Invalid OTP",
          text: "Please enter a valid 6-digit OTP.",
        });
      }
    } else if (step === 3) {
      if (formData.password.length >= 6) {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        users.push(formData);
        localStorage.setItem("users", JSON.stringify(users));

        Swal.fire({
          icon: "success",
          title: "Signup Successful!",
          showConfirmButton: false,
          timer: 1500,
        });

        setFormData({
          firstName: "",
          lastName: "",
          mobile: "",
          otp: "",
          password: "",
        });
        setStep(1);
        navigate("/login");
      } else {
        Swal.fire({
          icon: "info",
          title: "Weak Password",
          text: "Password should be at least 6 characters.",
        });
      }
    }
  };

  return (
    <div className="container mt-4" style={{ maxWidth: "500px" }}>
      <h3 className="mb-3">Sign Up</h3>

      {step === 1 && (
        <>
          <div className="mb-3">
            <label className="form-label">First Name</label>
            <input
              type="text"
              className="form-control"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Last Name</label>
            <input
              type="text"
              className="form-control"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Mobile Number</label>
            <input
              type="tel"
              className="form-control"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              maxLength="10"
              required
            />
          </div>
        </>
      )}

      {step === 2 && (
        <div className="mb-3">
          <label className="form-label">Enter OTP</label>
          <input
            type="text"
            className="form-control"
            name="otp"
            value={formData.otp}
            onChange={handleChange}
            maxLength="6"
            required
          />
        </div>
      )}

      {step === 3 && (
        <div className="mb-3">
          <label className="form-label">Create Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
      )}

      <button className="btn btn-primary mt-3" onClick={handleNext}>
        {step === 3 ? "Submit" : "Next"}
      </button>
    </div>
  );
};

export default Signup;
