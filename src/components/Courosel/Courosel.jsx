import React from "react";
import "./Courosel.css";

const Courosel = ({ project }) => {
  // Если project не передан, используем пустой массив
  const images = project?.IMGCRS || [];
  const techStack = project?.techStack || {};

  return (
    <div className="shool-carousel-container">
      <div className="shool-carousel-wrapper">
        <div className="shool-card">
          <div className="shool-left">
            <div className="shool-carousel">
              {(Array.isArray(images) ? images : [images]).map(
                (image, index) => (
                  <img
                    key={index}
                    className="shool-img"
                    src={image}
                    alt={`Проект ${index + 1}`}
                  />
                )
              )}
            </div>
          </div>
          <div className="shool-right">
            <h1>Стек технологий</h1>
            <div className="shool-content">
              <ul className="tech-list tech-list--three-columns">
                {Object.values(techStack)
                  .flat()
                  .map((tech, index) => (
                    <li key={index} className="tech-item">
                      {tech}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courosel;
