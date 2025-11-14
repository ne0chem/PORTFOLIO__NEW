import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { portfolioData } from "../data/portfolio-data";
import "swiper/css";
import "./PortfolioCarousel.css";

// Добавьте массив services (пример данных)

const PortfolioCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleServiceClick = (service) => {
    navigate("/service", {
      state: {
        category: service.category,
        serviceId: service.id,
      },
    });
  };

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const onSwiper = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  const onSlideChange = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <div className="services-carousel-container ">
      <div className="services-carousel-wrapper">
        {/* Кнопки управления */}

        <Swiper
          ref={swiperRef}
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1} // Всегда 1 слайд
          centeredSlides={true}
          loop={true}
          grabCursor={true}
          /* ЗАКОММЕНТИРОВАНО АВТОПЛЕЙ
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          */
          onSwiper={onSwiper}
          onSlideChange={onSlideChange}
        >
          {portfolioData.map((portfolioData) => (
            <SwiperSlide key={portfolioData.id}>
              <div className="portfolio-card">
                <div className="portfolio-left">
                  <div className="css-carousel">
                    {(Array.isArray(portfolioData.images)
                      ? portfolioData.images
                      : [portfolioData.images]
                    ).map((image, index) => (
                      <img
                        key={index}
                        className="portfolio-img"
                        src={image}
                        alt={`Проект ${index + 1}`}
                      />
                    ))}
                  </div>
                  <p className="portfolio__category">
                    {portfolioData.categoryTitle}
                  </p>
                  <div className="portfolio__links">
                    <div className="link">
                      <a
                        href={portfolioData.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          className="portfolio__link-img"
                          src={portfolioData.linkImg}
                          alt="GitHub repository"
                        />
                      </a>
                    </div>
                    <div className="gitHub">
                      <a
                        href={portfolioData.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          className="portfolio__link-img"
                          src={portfolioData.githubImg}
                          alt="GitHub repository"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="portfolio-right">
                  <div className="portfolio-content">
                    <div className="portfolio-header">
                      <h3 className="portfolio-title">{portfolioData.title}</h3>
                      <div className="portfolio__role-time">
                        <div className="portfolio__role">
                          <p className="portfolio__role">
                            Роль :
                            <span className="portfolio__role__dop">
                              {portfolioData.role}
                            </span>
                          </p>
                        </div>
                        <div className="portfolio__role">
                          <p className="portfolio__role">
                            Время разработки :
                            <span className="portfolio__role__dop">
                              {portfolioData.time}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="portfolio__main">
                      <div className="potrfolio__ul">
                        <ul className="portfolio__list">
                          {portfolioData && portfolioData.responsibilities
                            ? portfolioData.responsibilities.map(
                                (responsibility, index) => (
                                  <li key={index} className="portfolio__li">
                                    {responsibility}
                                  </li>
                                )
                              )
                            : null}
                        </ul>
                      </div>
                      <ul className="tech-list tech-list--three-columns">
                        {Object.values(portfolioData.techStack || {})
                          .flat()
                          .map((tech, index) => (
                            <li key={index} className="tech-item">
                              {tech}
                            </li>
                          ))}
                      </ul>
                    </div>
                    <div className="portfolio-footer">
                      <button
                        className="portfolio__button__1"
                        onClick={portfolioData}
                      >
                        Подробнее
                      </button>
                      <p className="portfolio-price">{portfolioData.price}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PortfolioCarousel;
