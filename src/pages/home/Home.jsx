import React from "react";
import "./Home.css";
import ThreadsBackground from "../../animation/ThreadsBackground/ThreadsBackground";
import useWow from "../../animation/useWOW/useWow";
import PortfolioCarousel from "../../PortfolioCarousel/PortfolioCarousel";

export default function Home() {
  useWow();
  return (
    <div className="home">
      <div className="content-container">
        <ThreadsBackground />
        <section className="home__section ">
          <div className="home__header">
            <div className="home__header-left wow animate__animated animate__backInLeft">
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
            <div className="home__img wow animate__animated animate__backInRight ">
              <img className="home__image" src="./img.jpg" alt="" />
            </div>
          </div>
        </section>
        <section className="swipper">
          <h1 className="home__title skills__title ">Мои работы</h1>
          <PortfolioCarousel />
        </section>
        <section className="skills ">
          <h1 className="home__title skills__title wow animate__animated animate__backInDown">
            Фронтенд навыки
          </h1>
          <div className="skills__container wow animate__animated animate__bounceInRight">
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
                      style={{ width: "95%" }}
                    ></div>
                  </div>
                  <span className="skills__progress-percent">95%</span>
                </div>

                <div className="skills__progress-item">
                  <span className="skills__progress-name">CSS</span>
                  <div className="skills__progress-bar">
                    <div
                      className="skills__progress-fill"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                  <span className="skills__progress-percent">85-90%</span>
                </div>

                <div className="skills__progress-item">
                  <span className="skills__progress-name">JavaScript</span>
                  <div className="skills__progress-bar">
                    <div
                      className="skills__progress-fill"
                      style={{ width: "65%" }}
                    ></div>
                  </div>
                  <span className="skills__progress-percent">65-75%</span>
                </div>

                <div className="skills__progress-item">
                  <span className="skills__progress-name">React</span>
                  <div className="skills__progress-bar">
                    <div
                      className="skills__progress-fill"
                      style={{ width: "65%" }}
                    ></div>
                  </div>
                  <span className="skills__progress-percent">65-70%</span>
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
                  <span className="skills__progress-name">
                    TypeScript <span className="skills__note">(изучаю)</span>
                  </span>
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
        <section className="stek wow animate__animated animate__jackInTheBox ">
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
                <div className="development__card  wow animate__animated animate__zoomInLeft">
                  <img className="development__icon" src="./ts.svg" alt="" />
                  <h3 className="home__subtitle">TypeScript</h3>
                  <p className="home__text">
                    Углубляюсь в типизацию, generics и продвинутые паттерны.
                    Пишу более надежный и поддерживаемый код.
                  </p>
                </div>

                <div className="development__card wow animate__animated animate__zoomInDown">
                  <img className="development__icon" src="./node.svg" alt="" />
                  <h3 className="home__subtitle">Node.js</h3>
                  <p className="home__text">
                    Изучаю бэкенд-разработку чтобы понимать полный цикл создания
                    приложений и лучше взаимодействовать с backend-командой.
                  </p>
                </div>

                <div className="development__card wow animate__animated animate__zoomInRight">
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
              <div className="development__grid wow animate__animated animate__zoomInLeft">
                <div className="development__card">
                  <div className="goal__content">
                    <h3 className="home__subtitle">Fullstack развитие</h3>
                    <p className="home__text">
                      Освоить полный цикл разработки и создавать полноценные
                      приложения
                    </p>
                  </div>
                </div>

                <div className="development__card wow animate__animated animate__zoomInDown">
                  <div className="goal__content">
                    <h3 className="home__subtitle">Сложные интерфейсы</h3>
                    <p className="home__text">
                      Работать над проектами с богатой интерактивностью и
                      анимациями
                    </p>
                  </div>
                </div>

                <div className="development__card wow animate__animated animate__zoomInRight">
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
        <section className="myFitsandCurs">
          <div className="myFitsandCurs__grid">
            <div className="myFits__container wow animate__animated animate__slideInLeft">
              <h1 className="home__title">Мой подход к работе</h1>
              <p className="home__text myFits__text">
                Верю, что выдающийся фронтенд — это там, где безупречный код
                встречается с продуманным дизайном. Моя цель — не просто
                реализовать макет, а создать живой, отзывчивый интерфейс,
                который решит задачу пользователя и вызовет у него эмоциональный
                отклик. Для этого я фокусируюсь на чистоте кода,
                производительности и постоянном изучении новых технологий для
                создания по-настоящему "вау" эффектов.
              </p>
              <p className="home__text myFits__text">
                Постоянно изучаю новые технологии и лучшие практики, чтобы
                внедрять в проекты современные и интерактивные элементы,
                создающие то самое "вау"-ощущение — будь то плавные анимации или
                сложная интерактивная логика.
              </p>
            </div>

            <div className="curs__container wow animate__animated animate__slideInRight">
              <h1 className="home__title">Курсы и непрерывное развитие</h1>
              <p className="home__text myFits__text">
                Frontend-разработчик | [Nordic IT Shool]
                <span className="highlight">
                  8-месячная интенсивная программа, завершена на "отлично".
                </span>
                Получила прочную базу в Frontend (HTML, CSS, SASS, React) и
                базовое понимание Backend (Node.js). Успешно применила
                полученные знания в учебных и коммерческих проектах разной
                сложности Изучила и применяла компонентный подход, методологии
                БЭМ и принципы адаптивной верстки.
              </p>
              <p className="home__text myFits__text">
                После курса: не остановилась на достигнутом и продолжила
                углублять знания через узкоспециализированные интенсивы, где
                изучила и внедрила в свои проекты современные библиотеки для
                анимаций (WOW.js, Animate.css).
              </p>
            </div>
          </div>
        </section>
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
