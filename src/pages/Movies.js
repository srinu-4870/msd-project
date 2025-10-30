import React from "react";
import { useNavigate } from "react-router-dom";

function Movies() {
  const navigate = useNavigate();

  const movieList = Array.from({ length: 50 }, (_, index) => ({
    id: index + 1,
    title: `Movie Title ${index + 1}`,
    year: 2000 + (index % 25),
    image: `https://picsum.photos/200/300?random=${index + 1}`,
    rating: (Math.random() * 5 + 5).toFixed(1),
    directors: [
      { name: "Director A", photo: "https://picsum.photos/50?random=201" },
    ],
    producers: [
      { name: "Producer X", photo: "https://picsum.photos/50?random=202" },
    ],
    actors: [
      { name: "Actor 1", photo: "https://picsum.photos/50?random=203" },
      { name: "Actor 2", photo: "https://picsum.photos/50?random=204" },
    ],
    cast: ["Actor 1", "Actor 2", "Actor 3"],
    crew: ["Editor 1", "Writer 1"],
    reviews: [
      "Outstanding movie!",
      "Enjoyed every moment.",
      "Great performances.",
    ],
  }));

  // Store the full list in localStorage for detail page usage
  localStorage.setItem("movieList", JSON.stringify(movieList));

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">🎬 Explore Movies</h2>
      <div className="row">
        {movieList.map((movie) => (
          <div
            key={movie.id}
            className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4"
            onClick={() => navigate(`/movie/${movie.id}`)}
            style={{ cursor: "pointer" }}
          >
            <div className="card h-100 shadow-sm">
              <img
                src={movie.image}
                className="card-img-top"
                alt={movie.title}
                style={{ height: "250px", objectFit: "cover" }}
              />
              <div className="card-body p-2">
                <h6 className="card-title mb-1 text-truncate">{movie.title}</h6>
                <p className="card-text small text-muted mb-0">📅 {movie.year}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movies;
