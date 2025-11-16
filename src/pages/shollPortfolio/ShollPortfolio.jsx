import React from "react";
import ThreadsBackground from "../../animation/ThreadsBackground/ThreadsBackground";
import "./ShollPortfolio.css";
import { useParams, useNavigate } from "react-router-dom";
import { portfolioData } from "../../data/portfolio-data";

export default function ShollPortfolio() {
  const navigate = useNavigate();

  const openProject = (project) => {
    // Переходим на страницу проекта относительно текущего пути
    navigate(`project/${project.id}`);
    // или можно так: navigate(`/portfolio/project/${project.id}`);
  };
  return (
    <div className="shool">
      <div className="content-container">
        <ThreadsBackground />
        <div className="portfolio__header">
          <div
            className="portfolio__cards wow animate__animated animate__jackInTheBox"
            data-wow-duration="1s"
            data-wow-delay="1s"
          >
            <div className="portfolio__cards-link">
              {portfolioData
                .filter((item) => item.category === "shool")
                .map((project) => (
                  <div
                    key={project.id}
                    className="portfolioData-link-horizontal clickable"
                    onClick={() => openProject(project)}
                  >
                    <div className="portfolioData-link-info">
                      <div className="portfolioData__title">
                        {project.title}
                      </div>
                      <div className="portfolioData-role">{project.role}</div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
