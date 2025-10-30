import React from "react";

function Plays() {
  const playEvents = [
    {
      title: "Shakespeare's Hamlet",
      date: "June 25, 2025",
      location: "Ravindra Bharathi, Hyderabad",
      image: "https://picsum.photos/300?random=41",
    },
    {
      title: "The Mousetrap - A Classic Mystery",
      date: "July 2, 2025",
      location: "Prithvi Theatre, Mumbai",
      image: "https://picsum.photos/300?random=42",
    },
    {
      title: "Ramayana - A Dance Drama",
      date: "July 10, 2025",
      location: "Ranga Shankara, Bengaluru",
      image: "https://picsum.photos/300?random=43",
    },
    {
      title: "Court Martial by Swadesh Deepak",
      date: "August 1, 2025",
      location: "Sri Ram Centre, Delhi",
      image: "https://picsum.photos/300?random=44",
    },
  ];

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">🎭 Popular Plays in Your City</h2>
      <div className="row">
        {playEvents.map((play, index) => (
          <div key={index} className="col-md-6 col-lg-3 mb-4">
            <div className="card h-100 shadow-sm">
              <img
                src={play.image}
                className="card-img-top"
                alt={play.title}
                style={{ height: "180px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{play.title}</h5>
                <p className="card-text">
                  📅 {play.date} <br />
                  📍 {play.location}
                </p>
                <button className="btn btn-danger w-100">Book Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="my-5" />

      <h4 className="text-center mb-3">🎟️ Genres</h4>
      <div className="d-flex justify-content-center flex-wrap gap-3">
        {["Drama", "Comedy", "Thriller", "Musical", "Historical", "Monologue"].map((genre, i) => (
          <span key={i} className="badge bg-warning text-dark fs-6 px-4 py-2">
            {genre}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Plays;
