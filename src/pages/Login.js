import React, { useState } from "react";
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (mobile.length !== 10 || password.length < 6) {
      Swal.fire({
        icon: "warning",
        title: "Invalid Input",
        text: "Enter a valid 10-digit mobile number and password (min 6 characters).",
      });
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.mobile === mobile && u.password === password
    );

    if (user) {
      Swal.fire({
        icon: "success",
        title: "Login Successful!",
        showConfirmButton: false,
        timer: 1500,
      });
      // Save login state to localStorage (optional)
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      localStorage.setItem("isLoggedIn", true);
      navigate("/");
      window.location.reload();
    } else {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: "Incorrect mobile number or password.",
      });
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h3 className="mb-4">Login</h3>
      <div className="mb-3">
        <label className="form-label">Mobile Number</label>
        <input
          type="tel"
          className="form-control"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          maxLength="10"
          placeholder="Enter your mobile number"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Password</label>
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
      </div>

      <button className="btn btn-primary w-100" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default Login;
