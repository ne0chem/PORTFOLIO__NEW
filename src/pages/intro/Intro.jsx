import React from "react";
import "./Intro.css";
import LetterGlitch from "../../animation/LetterGlitch/LetterGlitch";

const Intro = () => {
  const handleEnterPortfolio = () => {
    const container = document.querySelector(".container");
    const glitch = document.querySelector(".letter-glitch-container");

    if (container) {
      container.style.animation = "fadeOutUp 0.6s ease forwards";
    }
    if (glitch) {
      glitch.style.animation = "fadeOut 0.6s ease forwards";
    }

    setTimeout(() => {
      window.location.href = "/home";
    }, 600);
  };

  return (
    <div className="app">
      <LetterGlitch
        glitchSpeed={50}
        centerVignette={true}
        outerVignette={false}
        smooth={true}
      />

      <div className="container">
        <div className="simple-block">
          <h1 className="name">Ангелина</h1>

          <p className="role">Frontend Developer</p>

          <div className="experience">
            <span className="experience-badge">1+ год</span>
            <span>коммерческой разработки</span>
          </div>

          <div className="description">
            <p>Создаю современные и интуитивные интерфейсы</p>
            <p>Специализируюсь на React экосистеме</p>
            <p>Влюблена в чистый код и красивый UI</p>
          </div>

          <div className="button-container">
            <button
              className="enter-button"
              onClick={handleEnterPortfolio}
              aria-label="Перейти к основному портфолио"
            >
              <span className="button-text">Открыть портфолио</span>
              <span className="button-glow"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Экспорт компонента для использования в других файлах
export default Intro;
