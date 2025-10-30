import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const movieList = JSON.parse(localStorage.getItem("movieList")) || [];
  const movie = movieList.find((m) => m.id === parseInt(id));

  const [showModal, setShowModal] = useState(false);
  const [buyerName, setBuyerName] = useState("");
  const [ticketCount, setTicketCount] = useState(1);
  const TICKET_PRICE = 150;
  const GST_PERCENT = 18;

  const totalPrice = ticketCount * TICKET_PRICE;
  const gstAmount = (totalPrice * GST_PERCENT) / 100;
  const finalAmount = totalPrice + gstAmount;

  const handleBookNow = () => {
    const loginStatus = localStorage.getItem("isLoggedIn");

    if (!loginStatus) {
      alert("❌ You must be logged in to book tickets.");
      return;
    }

    const currentUser =  JSON.parse(localStorage.getItem("loggedInUser"));;
    if (!currentUser) {
      alert("❌ Login to Book Tickets");
      navigate('/login')
      return;
    }

    const booking = {
      movieId: movie.id,
      movieTitle: movie.title,
      name: buyerName,
      phone: currentUser.mobile,
      tickets: ticketCount,
      price: finalAmount.toFixed(2),
      date: new Date().toISOString(),
    };

    const bookings = JSON.parse(localStorage.getItem("movieBookings")) || [];
    bookings.push(booking);
    localStorage.setItem("movieBookings", JSON.stringify(bookings));

    setShowModal(false);
    setBuyerName("");
    setTicketCount(1);
    alert("🎟 Booking successful!");
  };

  if (!movie) return <h3 className="text-center my-5">Movie Not Found</h3>;

  return (
    <div className="container my-5">
      {/* Hero Section */}
      <div className="row align-items-center bg-dark text-white rounded p-4 mb-5 shadow-lg">
        <div className="col-md-4">
          <img
            src={movie.image}
            alt={movie.title}
            className="img-fluid rounded shadow-lg"
            style={{ border: "4px solid #fff" }}
          />
        </div>
        <div className="col-md-8">
          <h1 className="display-4 fw-bold">{movie.title}</h1>
          <p className="lead">Release Year: {movie.year}</p>
          <p className="fs-5">
            ⭐ Rating: <strong>{movie.rating}/10</strong>
          </p>
          <div className="d-flex gap-3 mt-4">
            <button className="btn btn-success px-4" onClick={() => alert("Trailer Coming Soon!")}>
              Watch Trailer
            </button>
            <button className="btn btn-warning px-4" onClick={() => setShowModal(true)}>
              🎟 Book Tickets
            </button>
            <button className="btn btn-outline-light" onClick={() => navigate(-1)}>
              ⬅ Back to Movies
            </button>
          </div>
        </div>
      </div>

      {/* Directors, Producers, Actors */}
      <section className="mb-5">
        <div className="row text-center">
          {[
            { title: "🎬 Directors", data: movie.directors },
            { title: "🎥 Producers", data: movie.producers },
            { title: "🎭 Actors", data: movie.actors },
          ].map((section, i) => (
            <div key={i} className="col-md-4 mb-4">
              <h4 className="mb-3">{section.title}</h4>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                {section.data.map((p, j) => (
                  <div key={j} className="text-center">
                    <img
                      src={p.photo}
                      alt={p.name}
                      className="rounded-circle border border-2 border-primary shadow"
                      width={70}
                      height={70}
                    />
                    <p className="small mt-2 fw-semibold">{p.name}</p>
                    <button
                      className="btn btn-sm btn-outline-secondary"
                      onClick={() => alert(`🔍 Profile page for ${p.name} coming soon!`)}
                    >
                      View Profile
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cast and Crew */}
      <section className="mb-5 bg-light p-4 rounded shadow-sm">
        <h4 className="mb-3">🎟 Cast</h4>
        <div className="d-flex gap-2 flex-wrap mb-4">
          {movie.cast.map((c, i) => (
            <span key={i} className="badge bg-primary fs-6">{c}</span>
          ))}
        </div>

        <h4 className="mb-3">🛠 Crew</h4>
        <div className="d-flex gap-2 flex-wrap">
          {movie.crew.map((c, i) => (
            <span key={i} className="badge bg-secondary fs-6">{c}</span>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="mb-5">
        <h4 className="mb-3">🌟 Top Reviews</h4>
        <div className="list-group">
          {movie.reviews.map((rev, i) => (
            <div key={i} className="list-group-item list-group-item-action">
              <i className="bi bi-chat-quote me-2 text-primary"></i>
              {rev}
            </div>
          ))}
        </div>
      </section>

      {/* Suggested Movies */}
      <section>
        <h4 className="mb-4">📺 You May Also Like</h4>
        <div className="row">
          {movieList
            .filter((m) => m.id !== movie.id)
            .slice(0, 4)
            .map((m) => (
              <div
                key={m.id}
                className="col-6 col-md-3 mb-4"
                onClick={() => navigate(`/movie/${m.id}`)}
                style={{ cursor: "pointer" }}
              >
                <div className="card h-100 shadow-sm hover-shadow">
                  <img
                    src={m.image}
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                    alt={m.title}
                  />
                  <div className="card-body">
                    <h6 className="card-title text-truncate">{m.title}</h6>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* Ticket Booking Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>🎫 Book Tickets for {movie.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-3">
            <label className="form-label">Your Name</label>
            <input
              type="text"
              className="form-control"
              value={buyerName}
              onChange={(e) => setBuyerName(e.target.value)}
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Number of Tickets</label>
            <input
              type="number"
              min={1}
              className="form-control"
              value={ticketCount}
              onChange={(e) => setTicketCount(parseInt(e.target.value))}
            />
          </div>
          <div className="mb-3">
            <p>🎟 Price: ₹{TICKET_PRICE} x {ticketCount} = ₹{totalPrice}</p>
            <p>GST (18%): ₹{gstAmount.toFixed(2)}</p>
            <h5>Total: ₹{finalAmount.toFixed(2)}</h5>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleBookNow} disabled={!buyerName}>
            Book Now
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default MovieDetails;
