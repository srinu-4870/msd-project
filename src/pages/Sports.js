import React from "react";

function Sports() {
  const sportsEvents = [
    {
      title: "IPL 2025 - Chennai Super Kings vs Mumbai Indians",
      date: "July 20, 2025",
      location: "MA Chidambaram Stadium, Chennai",
      image: "https://picsum.photos/300?random=31",
    },
    {
      title: "Pro Kabaddi League Finals",
      date: "August 5, 2025",
      location: "Gachibowli Indoor Stadium, Hyderabad",
      image: "https://picsum.photos/300?random=32",
    },
    {
      title: "Hyderabad Runners Marathon",
      date: "September 10, 2025",
      location: "Necklace Road, Hyderabad",
      image: "https://picsum.photos/300?random=33",
    },
    {
      title: "India vs Australia - ODI Series",
      date: "October 3, 2025",
      location: "Eden Gardens, Kolkata",
      image: "https://picsum.photos/300?random=34",
    },
  ];

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">🔥 Featured Sports Events</h2>
      <div className="row">
        {sportsEvents.map((event, index) => (
          <div key={index} className="col-md-6 col-lg-3 mb-4">
            <div className="card h-100 shadow">
              <img
                src={event.image}
                className="card-img-top"
                alt={event.title}
                style={{ height: "180px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{event.title}</h5>
                <p className="card-text">
                  📅 {event.date} <br />
                  📍 {event.location}
                </p>
                <button className="btn btn-primary w-100">Book Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="my-5" />

      <h4 className="text-center mb-3">🏆 Popular Categories</h4>
      <div className="d-flex justify-content-center flex-wrap gap-3">
        {["Cricket", "Football", "Marathons", "Kabaddi", "Badminton", "Cycling"].map((category, i) => (
          <span key={i} className="badge bg-secondary fs-6 px-4 py-2">
            {category}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Sports;
