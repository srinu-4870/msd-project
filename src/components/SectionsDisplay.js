import React from "react";
import sectionsData from "./data";

function SectionsDisplay() {
  return (
    <div>
      {sectionsData.map((section, index) => (
        <div
          key={section.key}
          className={`py-5 ${index % 2 === 0 ? "bg-light" : "bg-secondary text-white"}`}
        >
          <div className="container">
            <h2 className="mb-4">{section.title}</h2>
            <div className="row">
              {section.items.map((item) => (
                <div className="col-md-3 mb-4" key={item.id}>
                  <div className="card h-100">
                    <img
                      src={item.image}
                      className="card-img-top"
                      alt={item.title}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SectionsDisplay;
