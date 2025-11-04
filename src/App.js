import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import Movies from "./pages/Movies";
import Plays from "./pages/Plays";
import Streams from "./pages/Streams";
import Sports from "./pages/Sports";
import Events from "./pages/Events";
import MovieDetails from "./pages/MovieDetails";
import Tickets from "./pages/Tickets";
import Buzz from "./pages/Buzz";
import Corporates from "./pages/Corporates";
import Offers from "./pages/Offers";
import Gifts from "./pages/Gifts";
import Help from "./pages/Help";
import Contact from "./pages/Contact";
import Faqs from "./pages/Faqs";
import Terms from "./pages/Terms";
import PrivacyPolicy from "./PrivacyPolicy";
import ProtectedRoute from "./components/ProtectedRoute";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          {/* Public routes */}
          <Route path="/register" element={<Signup />} />
          <Route path="/login" element={<Login />} />

          {/* Protected routes */}
          <Route
            path="/*"
            element={
              <ProtectedRoute>
                <>
                  <Header />
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/movies" element={<Movies />} />
                    <Route path="/movie/:id" element={<MovieDetails />} />
                    <Route path="/plays" element={<Plays />} />
                    <Route path="/my-tickets" element={<Tickets />} />
                    <Route path="/streams" element={<Streams />} />
                    <Route path="/sports" element={<Sports />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/buzz" element={<Buzz />} />
                    <Route exact path="/corporates" element={<Corporates />} />
                    <Route exact path="/offers" element={<Offers />} />
                    <Route exact path="/terms" element={<Terms />} />
                    <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route exact path="/help" element={<Help />} />
                    <Route exact path="/faqs" element={<Faqs />} />
                  </Routes>
                  <Footer />
                </>
              </ProtectedRoute>
            }
          />
          <Route exact path="/gifts" element={<ProtectedRoute><Gifts /></ProtectedRoute>} />
          <Route exact path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
