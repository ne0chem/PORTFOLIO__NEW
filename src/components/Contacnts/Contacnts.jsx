import React from "react";
import "./Contacnts.css";

export default function Contacnts() {
  return (
    <div className="contacnts__wrapper">
      <div className="container">
        <section className="contacts wow animate__animated animate__fadeInBottomLeft">
          <h1 className="home__title">Связаться со мной</h1>
          <div className="contacts__grid">
            <a
              href="mailto:brenkoangelina@gmail.com?subject=Предложение для Frontend разработчика&body=Добрый день, Ангелина! 
  
Мы просмотрели ваше портфолио и хотели бы обсудить..."
              className="contact-card"
            >
              <img className="icon" src="./gmail.svg" alt="" />
              <span>Email</span>
            </a>

            <a href="https://t.me/ne_o_chem11" className="contact-card">
              <img className="icon" src="./telegram.svg" alt="" />
              <span>Telegram</span>
            </a>

            <a href="https://github.com/ne0chem" className="contact-card">
              <img className="icon" src="./github_dark.svg" alt="" />
              <span>GitHub</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
