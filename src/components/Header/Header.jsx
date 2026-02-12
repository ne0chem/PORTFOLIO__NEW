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
            Коммерческие проекты
          </Link>
          <Link
            to="/shool"
            className={`header__nav-link ${
              location.pathname === "/shool" ? "active" : ""
            }`}
          >
            Учебные проекты
          </Link>
        </nav>

        <button className="header__button" onClick={openModal}>
          {window.innerWidth <= 480 ? "Связаться" : "Связаться со мной"}
        </button>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={handleOverlayClick}>
          <div className="modal-content">
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>

            <h2 className="modal-title">Связаться со мной</h2>

            <div className="modal-contacts">
              <a
                href="mailto:brenkoangelina@gmail.com?subject=Предложение для Frontend разработчика&body=Добрый день, Ангелина! 
Мы просмотрели ваше портфолио и хотели бы обсудить..."
                className="modal-contact"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeModal}
              >
                <img className="modal-icon" src="/gmail.svg" alt="Email" />
                <span>Email</span>
              </a>

              <a
                href="https://t.me/ne_o_chem11"
                className="modal-contact"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeModal}
              >
                <img
                  className="modal-icon"
                  src="/telegram.svg"
                  alt="Telegram"
                />
                <span>Telegram</span>
              </a>

              <a
                href="https://github.com/ne0chem"
                className="modal-contact"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeModal}
              >
                <img
                  className="modal-icon"
                  src="/github_dark.svg"
                  alt="GitHub"
                />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
