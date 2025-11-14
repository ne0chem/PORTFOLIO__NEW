import React, { useState } from "react";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    // Просто добавляем класс на overlay
    document.querySelector(".modal-overlay")?.classList.add("fade-out");

    setTimeout(() => {
      setIsModalOpen(false);
      document.body.style.overflow = "unset";
    }, 300);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const handleLinkClick = () => {
    closeModal();
  };

  return (
    <div className="header">
      <div className="header__container">
        <Link to="/home" className="header__logo">
          Ангелина
        </Link>

        <nav className="header__nav">
          <Link
            to="/home"
            className={`header__nav-link ${
              location.pathname === "/home" ? "active" : ""
            }`}
          >
            Обо мне
          </Link>
          <Link
            to="/portfolio"
            className={`header__nav-link ${
              location.pathname === "/portfolio" ? "active" : ""
            }`}
          >
            Портфолио(комерческие проекты)
          </Link>
          <Link
            to="/shool"
            className={`header__nav-link ${
              location.pathname === "/shool" ? "active" : ""
            }`}
          >
            Портфолио(учебные проекты)
          </Link>
        </nav>

        <button className="header__button" onClick={openModal}>
          Связаться со мной
        </button>
      </div>

      {/* Модальное окно */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={handleOverlayClick}>
          <div className="modal-content contacts wow animate__animated animate__fadeInBottomLeft">
            <button className="modal-close fade-out" onClick={closeModal}>
              ×
            </button>

            <h1 className="home__title">Связаться со мной</h1>
            <div className="contacts__grid">
              <a
                href="mailto:brenkoangelina@gmail.com?subject=Предложение для Frontend разработчика&body=Добрый день, Ангелина! 
Мы просмотрели ваше портфолио и хотели бы обсудить..."
                className="contact-card"
                onClick={handleLinkClick}
              >
                <img className="icon" src="/gmail.svg" alt="Email" />
                <span>Email</span>
              </a>

              <a
                href="https://t.me/ne_o_chem11"
                className="contact-card"
                onClick={handleLinkClick}
              >
                <img className="icon" src="/telegram.svg" alt="Telegram" />
                <span>Telegram</span>
              </a>

              <a
                href="https://github.com/ne0chem"
                className="contact-card"
                onClick={handleLinkClick}
              >
                <img className="icon" src="/github_dark.svg" alt="GitHub" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
