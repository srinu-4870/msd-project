import React, { useEffect, useState } from "react";
import Logo from "../assets/logo.png";
import { useNavigate, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userCity, setUserCity] = useState("");
  const [locationOptions, setLocationOptions] = useState([
    "Hyderabad",
    "Chennai",
    "Bangalore",
  ]);

  useEffect(() => {
    const loginStatus = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(loginStatus === "true");
  }, []);

  useEffect(() => {
    // Ask for user's location
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          // Use Nominatim to reverse geocode
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
          );
          const data = await res.json();
          const city =
            data.address.city || data.address.town || data.address.village;
          if (city && !locationOptions.includes(city)) {
            setLocationOptions((prev) => [city, ...prev]);
          }
          setUserCity(city);
        } catch (err) {
          console.error("Failed to fetch location:", err);
        }
      },
      (error) => {
        console.error("Geolocation permission denied or error:", error);
      }
    );
  }, []);

  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", false);
    localStorage.removeItem("loggedInUser");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <header className="border-bottom">
      {/* Bootstrap Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container-fluid">
          {/* Brand + Search */}
          <div className="d-flex align-items-center gap-3">
            <img src={Logo} alt="Logo" height={40} />
            <input
              type="text"
              className="form-control form-control-sm d-none d-md-block"
              placeholder="Search Movies, Events, Sports..."
              style={{ width: "300px" }}
            />
          </div>

          {/* Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Right Side */}
          <div className="collapse navbar-collapse" id="navbarContent">
            <div className="ms-auto d-flex flex-column flex-lg-row align-items-lg-center gap-2">
              <select
                className="form-select form-select-sm w-auto"
                value={userCity}
              >
                {locationOptions.map((city, index) => (
                  <option key={index} value={city}>
                    {city}
                  </option>
                ))}
              </select>

              {!isLoggedIn ? (
                <>
                  <button
                    className="btn btn-outline-primary btn-sm"
                    onClick={() => navigate("/login")}
                  >
                    Sign In
                  </button>
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => navigate("/register")}
                  >
                    Sign Up
                  </button>
                </>
              ) : (
                <div className="dropdown">
                  <button
                    className="btn btn-light rounded-circle dropdown-toggle p-1"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{ width: "40px", height: "40px" }}
                  >
                    <i className="bi bi-person-fill fs-5"></i>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <button className="dropdown-item">Profile</button>
                    </li>
                    <li>
                      <button className="dropdown-item">Settings</button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() => navigate("/my-tickets")}
                      >
                        My Tickets
                      </button>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <button
                        className="dropdown-item text-danger"
                        onClick={handleLogout}
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Navigation Links */}
      <div className="container-fluid bg-light py-2 px-3">
        <div className="row">
          <div className="col-12 d-flex justify-content-between flex-wrap gap-2">
            <div className="d-flex gap-3 flex-wrap">
              <Link to="/movies" className="text-decoration-none text-dark">
                Movies
              </Link>
              <Link to="/streams" className="text-decoration-none text-dark">
                Stream
              </Link>
              <Link to="/events" className="text-decoration-none text-dark">
                Events
              </Link>
              <Link to="/plays" className="text-decoration-none text-dark">
                Plays
              </Link>
              <Link to="/sports" className="text-decoration-none text-dark">
                Sports
              </Link>
            </div>
            <div className="d-flex gap-3 flex-wrap">
              <Link to="/buzz" className="text-decoration-none text-dark">
                Buzz
              </Link>
              <Link to="/corporates" className="text-decoration-none text-dark">
                Corporates
              </Link>
              <Link to="/offers" className="text-decoration-none text-dark">
                Offers
              </Link>
              <Link to="/gifts" className="text-decoration-none text-dark">
                Gift Cards
              </Link>
              <Link to="/help" className="text-decoration-none text-dark">
                Help
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
