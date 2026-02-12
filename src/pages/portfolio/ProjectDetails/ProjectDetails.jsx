import React from "react";
import "./ProjectDetails.css";
import { useParams, useNavigate } from "react-router-dom";
import { portfolioData } from "../../../data/portfolio-data";
import ThreadsBackground from "../../../animation/ThreadsBackground/ThreadsBackground";
import Courosel from "../../../components/Courosel/Courosel";
import useWow from "../../../animation/useWOW/useWow";

export default function ProjectDetails() {
  useWow();
  const { projectId } = useParams();
  const navigate = useNavigate();

  const project = portfolioData.find((item) => item.id === projectId);

  console.log("Found project:", project);

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
        <h1 className="project-title wow animate__animated animate__fadeInLeft">
          {project.title}
        </h1>

        <div className="project-info wow animate__animated animate__fadeInRight">
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
          <div className="process-section wow animate__animated animate__fadeInUp">
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
