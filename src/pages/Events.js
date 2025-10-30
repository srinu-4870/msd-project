import React from "react";

function Events() {
  const eventList = [
    {
      title: "Arijit Singh Live Concert",
      date: "July 5, 2025",
      location: "Gachibowli Stadium, Hyderabad",
      image: "https://picsum.photos/300?random=51",
    },
    {
      title: "Startup & Tech Expo 2025",
      date: "August 10, 2025",
      location: "Hitex Exhibition Center, Hyderabad",
      image: "https://picsum.photos/300?random=52",
    },
    {
      title: "Stand-Up Comedy by Kenny Sebastian",
      date: "July 20, 2025",
      location: "Ravindra Bharathi, Hyderabad",
      image: "https://picsum.photos/300?random=53",
    },
    {
      title: "Photography Workshop: Street to Studio",
      date: "September 1, 2025",
      location: "Creative Hub, Chennai",
      image: "https://picsum.photos/300?random=54",
    },
  ];

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">🎉 Trending Events Around You</h2>
      <div className="row">
        {eventList.map((event, index) => (
          <div key={index} className="col-md-6 col-lg-3 mb-4">
            <div className="card h-100 shadow-sm">
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
                <button className="btn btn-success w-100">Book Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="my-5" />

      <h4 className="text-center mb-3">🎯 Categories</h4>
      <div className="d-flex justify-content-center flex-wrap gap-3">
        {["Music", "Comedy", "Workshops", "Expos", "Festivals", "Networking"].map((cat, i) => (
          <span key={i} className="badge bg-info text-dark fs-6 px-4 py-2">
            {cat}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Events;
