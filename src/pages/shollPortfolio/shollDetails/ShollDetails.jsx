import React from "react";
import "./shollDetails.css";
import { useParams, useNavigate } from "react-router-dom";
import { portfolioData } from "../../../data/portfolio-data";
import ThreadsBackground from "../../../animation/ThreadsBackground/ThreadsBackground";
import Courosel from "../../../components/Courosel/Courosel";

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
        <h1 className="title">{project.title}</h1>

        <div className="shool-info">
          <div className="info__left">
            <div className="shool-item">
              <p>Роль:</p>
              <p className="shool-item__dop">{project.role}</p>
            </div>
            <div className="shool-item">
              <p>Время разработки:</p>
              <p className="shool-item__dop">{project.time}</p>
            </div>
          </div>
          <div className="info__right">
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
            <div className="shool-item">
              <div className="link">
                <p>Ссылка на Github:</p>
                <a
                  className="link__shool"
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Перейти
                </a>
              </div>
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

        <div className="shool__main">
          <h3 className="shool__title">
            Приобритенные и закрепелнные навыки навыки
          </h3>
          <div className="potrfolio__ul shool__ul">
            <ul className="portfolio__list">
              {project && project.learnings
                ? project.learnings.map((responsibility, index) => (
                    <li key={index} className="portfolio__li">
                      {responsibility}
                    </li>
                  ))
                : null}
            </ul>
          </div>
        </div>

        {/* Передаем данные текущего проекта в карусель */}
        <Courosel project={project} />

        <div className="shool__conclusion">
          <h3 className="conclusion__title">Итоги проекта</h3>
          <p className="conclusion__text">{project.conclusion}</p>
        </div>
      </div>
    </div>
  );
}
