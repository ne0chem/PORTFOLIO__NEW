import React from "react";
import "./shollDetails.css";
import { useParams, useNavigate } from "react-router-dom";
import { portfolioData } from "../../../data/portfolio-data";
import ThreadsBackground from "../../../animation/ThreadsBackground/ThreadsBackground";

export default function ShollDetails() {
  const { projectId } = useParams();
  const navigate = useNavigate();

  // Находим проект по ID
  const project = portfolioData.find((item) => item.id === projectId);

  console.log("Found project:", project);

  // Если проект не найден
  if (!project) {
    return (
      <div className="shool-details">
        <button className="back-button" onClick={() => navigate("/shool")}>
          ← Назад к работам
        </button>
      </div>
    );
  }

  return (
    <div className="shool-details">
      <ThreadsBackground />
      <button className="back-button" onClick={() => navigate("/shool")}>
        ← Назад к работам
      </button>

      <div className="shool-content">
        <h1 className="shool-title">{project.title}</h1>

        <div className="shool-info">
          <div className="shool-item">
            <p>Роль:</p>
            <p className="shool-item__dop">{project.role}</p>
          </div>
          <div className="shool-item">
            <p>Время разработки:</p>
            <p className="shool-item__dop">{project.time}</p>
          </div>
          <div className="shool-item">
            <div className="link">
              <p>Ссылка на сайт:</p>
              <a
                className="link__shool"
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
          <div className="process-shool">
            <h2 className="process-shool">Процесс работы над проектом</h2>
            <div className="process-shool">
              {project.processBlocks.map((block, index) => (
                <div key={index} className="shool-block">
                  <h3 className="shool-title">{block.title}</h3>
                  <p className="shool-description">{block.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
