import React from "react";
import "./Home.css";
import ThreadsBackground from "../../animation/ThreadsBackground/ThreadsBackground";

export default function Home() {
  return (
    <div className="home">
      <div className="content-container">
        <ThreadsBackground />
        <section className="home__section">
          <div className="home__header">
            <div className="home__header-left">
              <h1 className="home__title">Обо мне</h1>
              <h2 className="home__subtitle">Ангелина • Frontend Developer</h2>
              <p className="home__text">
                Frontend-разработчик с фокусом на создание интуитивных и
                визуально привлекательных интерфейсов. Объединяю глубокое
                внимание к деталям, чистоту кода и мастерство в анимации для
                разработки цифровых продуктов, которые не только решают задачи
                пользователей, но и доставляют эстетическое удовольствие. Более
                года коммерческого опыта подтверждают мою способность отвечать
                требованиям бизнеса и пользователей.
              </p>

              <ul className="home__descr">
                Ключевые принципы:
                <li className="home__descr__text">
                  Результат для пользователя
                </li>
                <li className="home__descr__text">
                  Чистый и поддерживаемый код
                </li>
                <li className="home__descr__text">
                  Скорость с сохранением качества
                </li>
                <li className="home__descr__text">
                  Постоянное обучение и рост
                </li>
              </ul>
            </div>
            <div className="home__img">
              <img className="home__image" src="./img.jpg" alt="" />
            </div>
          </div>
        </section>
        <section className="skills ">
          <h1 className="home__title skills__title">Фронтенд навыки</h1>
          <div className="skills__container">
            <div className="skills__left">
              <div className="skills__item">
                <h2 className="home__subtitle">UI/UX Дизайн</h2>
                <p className="home__text">
                  Верстаю пиксель-перфект макеты с вниманием к деталям. Обладаю
                  чувством эстетики и пониманием пользовательского опыта, что
                  позволяет мне не просто переносить дизайн в код, но и улучшать
                  интерфейсы на основе логики взаимодействия.
                </p>
              </div>

              <div className="skills__item">
                <h2 className="home__subtitle">HTML, CSS, JavaScript</h2>
                <p className="home__text">
                  Владею чистой семантической версткой по методологии БЭМ,
                  создаю идеально адаптивные интерфейсы для всех устройств.
                  Быстро и качественно верстаю лендинги — в среднем за 3-8 часов
                  в зависимости от сложности макета. Активно использую
                  современные возможности CSS: Grid, Flexbox, сложные анимации и
                  плавные переходы. Создаю интерактивные элементы, уделяя
                  внимание оптимизации производительности и базовым принципам
                  SEO.
                </p>
              </div>

              <div className="skills__item">
                <h2 className="home__subtitle">React</h2>
                <p className="home__text">
                  Создаю современные веб-приложения на React, используя
                  компонентный подход для переиспользуемого и поддерживаемого
                  кода. React позволяет мне быстро разрабатывать сложные
                  интерфейсы, легко управлять состоянием приложения и
                  реализовывать интерактивные функции. Особенно ценю экосистему
                  React за богатые возможности анимаций и готовые решения для
                  любых задач.
                </p>
              </div>
            </div>

            <div className="skills__right">
              <div className="skills__progress">
                <div className="skills__progress-item">
                  <span className="skills__progress-name">HTML</span>
                  <div className="skills__progress-bar">
                    <div
                      className="skills__progress-fill"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                  <span className="skills__progress-percent">100%</span>
                </div>

                <div className="skills__progress-item">
                  <span className="skills__progress-name">CSS</span>
                  <div className="skills__progress-bar">
                    <div
                      className="skills__progress-fill"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                  <span className="skills__progress-percent">80%</span>
                </div>

                <div className="skills__progress-item">
                  <span className="skills__progress-name">JavaScript</span>
                  <div className="skills__progress-bar">
                    <div
                      className="skills__progress-fill"
                      style={{ width: "50%" }}
                    ></div>
                  </div>
                  <span className="skills__progress-percent">50%</span>
                </div>

                <div className="skills__progress-item">
                  <span className="skills__progress-name">React</span>
                  <div className="skills__progress-bar">
                    <div
                      className="skills__progress-fill"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                  <span className="skills__progress-percent">60%</span>
                </div>

                <div className="skills__progress-item">
                  <span className="skills__progress-name">Sass</span>
                  <div className="skills__progress-bar">
                    <div
                      className="skills__progress-fill"
                      style={{ width: "40%" }}
                    ></div>
                  </div>
                  <span className="skills__progress-percent">40%</span>
                </div>

                <div className="skills__progress-item">
                  <span className="skills__progress-name">TypeScript</span>
                  <div className="skills__progress-bar">
                    <div
                      className="skills__progress-fill"
                      style={{ width: "30%" }}
                    ></div>
                  </div>
                  <span className="skills__progress-percent">30%</span>
                </div>

                <div className="skills__progress-item">
                  <span className="skills__progress-name">Git</span>
                  <div className="skills__progress-bar">
                    <div
                      className="skills__progress-fill"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                  <span className="skills__progress-percent">70%</span>
                </div>

                <div className="skills__progress-item">
                  <span className="skills__progress-name">Figma</span>
                  <div className="skills__progress-bar">
                    <div
                      className="skills__progress-fill"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                  <span className="skills__progress-percent">60%</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="stek">
          <h1 className="home__title">Технологический стек</h1>
          <div className="stek__container">
            <div class="card">
              <div class="card-inner">
                <div class="card-front">
                  <h1 className="home__subtitle">Frontend</h1>
                </div>
                <div class="card-back">
                  <p>
                    React, JavaScript (ES6+), HTML5 (Семантическая верстка),
                    CSS3 (Grid, Flexbox, Adaptive/Responsive UI) Инструменты:
                    Git (CLI, Pull Requests), GitHub / GitLab, Vite, npm,
                    DevTools
                  </p>
                </div>
              </div>
            </div>

            <div class="card">
              <div class="card-inner">
                <div class="card-front">
                  <h1 className="home__subtitle">Анимации</h1>
                </div>
                <div class="card-back">
                  <p>
                    CSS Animations/Keyframes, Анимации при скролле (WOW.js),
                    Готовые библиотеки (Animate.css), Tailwind CSS
                  </p>
                </div>
              </div>
            </div>

            <div class="card">
              <div class="card-inner">
                <div class="card-front">
                  <h1 className="home__subtitle">Библиотеки</h1>
                </div>
                <div class="card-back">
                  <p>
                    React Router Dom, Redux, Axios, Fetch API, Formik / React
                    Hook Form, Yup
                  </p>
                </div>
              </div>
            </div>

            <div class="card">
              <div class="card-inner">
                <div class="card-front">
                  <h1 className="home__subtitle">
                    Методологии & Препроцессоры
                  </h1>
                </div>
                <div class="card-back">
                  <p>БЭМ, SCSS/SASS</p>
                </div>
              </div>
            </div>

            <div class="card">
              <div class="card-inner">
                <div class="card-front">
                  <h1 className="home__subtitle">Навыки</h1>
                </div>
                <div class="card-back">
                  <p>Адаптивная и кросcбраузерная верстка, Pixel Perfect</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="development">
          <div className="development__container">
            {/* Что изучаю сейчас */}
            <div className="development__section">
              <h2 className="home__title">Что изучаю сейчас</h2>
              <div className="development__grid">
                <div className="development__card">
                  <img className="development__icon" src="./ts.svg" alt="" />
                  <h3 className="home__subtitle">TypeScript</h3>
                  <p className="home__text">
                    Углубляюсь в типизацию, generics и продвинутые паттерны.
                    Пишу более надежный и поддерживаемый код.
                  </p>
                </div>

                <div className="development__card">
                  <img className="development__icon" src="./node.svg" alt="" />
                  <h3 className="home__subtitle">Node.js</h3>
                  <p className="home__text">
                    Изучаю бэкенд-разработку чтобы понимать полный цикл создания
                    приложений и лучше взаимодействовать с backend-командой.
                  </p>
                </div>

                <div className="development__card">
                  <img className="development__icon" src="./tws.svg" alt="" />
                  <h3 className="home__subtitle">Tailwind CSS</h3>
                  <p className="home__text">
                    Изучаю Tailwind CSS для ускорения процесса разработки и
                    создания современного, отзывчивого UI. Осваиваю утилитарный
                    подход к стилизации и лучшие практики фреймворка.
                  </p>
                </div>
              </div>
            </div>

            <div className="development__section">
              <h2 className="home__title">Мои цели</h2>
              <div className="development__grid">
                <div className="development__card">
                  <div className="goal__content">
                    <h3 className="home__subtitle">Fullstack развитие</h3>
                    <p className="home__text">
                      Освоить полный цикл разработки и создавать полноценные
                      приложения
                    </p>
                  </div>
                </div>

                <div className="development__card">
                  <div className="goal__content">
                    <h3 className="home__subtitle">Сложные интерфейсы</h3>
                    <p className="home__text">
                      Работать над проектами с богатой интерактивностью и
                      анимациями
                    </p>
                  </div>
                </div>

                <div className="development__card">
                  <div className="goal__content">
                    <h3 className="home__subtitle">Создание WOW-эффекта</h3>
                    <p className="home__text">
                      Разрабатывать интерфейсы, которые восхищают пользователей
                      и получают признание
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
