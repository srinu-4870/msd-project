import React, { useEffect, useState } from "react";

function Tickets() {
  const [bookings, setBookings] = useState([]);

useEffect(() => {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  if (user && user.mobile) {
    const mobile = user.mobile;
    const allBookings = JSON.parse(localStorage.getItem("movieBookings")) || [];
    const userBookings = allBookings.filter((booking) => booking.phone === mobile);
    setBookings(userBookings);
  }
}, []);


  if (bookings.length === 0) {
    return (
      <div className="container my-5 text-center">
        <h3>No Movie Bookings Found 🎬</h3>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <h2 className="mb-4">🎟 Your Movie Bookings</h2>
      <div className="row">
        {bookings.map((booking, index) => (
          <div key={index} className="col-md-6 mb-4">
            <div className="card shadow-sm border-primary">
              <div className="card-body">
                <h5 className="card-title text-primary">{booking.movieTitle}</h5>
                <p><strong>Buyer Name:</strong> {booking.name}</p>
                <p><strong>Phone:</strong> {booking.phone}</p>
                <p><strong>Tickets:</strong> {booking.tickets}</p>
                <p><strong>Total Price (with GST):</strong> ₹{booking.price}</p>
                <p className="text-muted small">Booked on: {new Date(booking.date).toLocaleString()}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tickets;
