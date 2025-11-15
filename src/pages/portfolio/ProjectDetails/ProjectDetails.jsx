import React from "react";
import "./ProjectDetails.css";
import { useParams, useNavigate } from "react-router-dom";
import { portfolioData } from "../../../data/portfolio-data";
import ThreadsBackground from "../../../animation/ThreadsBackground/ThreadsBackground";
import Courosel from "../../../components/Courosel/Courosel";

export default function ProjectDetails() {
  const { projectId } = useParams();
  const navigate = useNavigate();

  // Находим проект по ID
  const project = portfolioData.find((item) => item.id === projectId);

  console.log("Found project:", project);

  // Если проект не найден
  if (!project) {
    return (
      <div className="project-details">
        <button className="back-button" onClick={() => navigate("/portfolio")}>
          ← Назад к работам
        </button>
      </div>
    );
  }

  return (
    <div className="project-details">
      <ThreadsBackground />
      <button className="back-button" onClick={() => navigate("/portfolio")}>
        ← Назад к работам
      </button>

      <div className="project-content">
        <h1 className="project-title">{project.title}</h1>

        <div className="project-info">
          <div className="info-item">
            <p>Роль:</p>
            <p className="info-item__dop">{project.role}</p>
          </div>
          <div className="info-item">
            <p>Время разработки:</p>
            <p className="info-item__dop">{project.time}</p>
          </div>
          <div className="info-item">
            <div className="link">
              <p>Ссылка на сайт:</p>
              <a
                className="link__info"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Перейти
              </a>
            </div>
          </div>
        </div>

        {project.processBlocks && (
          <div className="process-section">
            <h2 className="process-title">Процесс работы над проектом</h2>
            <div className="process-blocks">
              {project.processBlocks.map((block, index) => (
                <div key={index} className="process-block">
                  <h3 className="block-title">{block.title}</h3>
                  <p className="block-description">{block.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        <Courosel project={project} />
        {/* {project.testimonial && (
          <div className="otziv">
            <h1 className="process-title">Отзыв заказчика</h1>
            <div className="otziv-blocks">
              {project.testimonial.map((block, index) => (
                <div key={index} className="otziv-block">
                  <h3 className="block-title">{block.position}</h3>
                  <p className="block-description">{block.text}</p>
                </div>
              ))}
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
}
