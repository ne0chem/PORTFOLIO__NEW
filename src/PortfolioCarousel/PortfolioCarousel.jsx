import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { portfolioData } from "../data/portfolio-data";
import Courosel from "../components/Courosel/Courosel";
import "swiper/css";
import "swiper/css/autoplay";
import "./PortfolioCarousel.css";

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

  const handleProjectClick = (projectId) => {
    window.scrollTo(0, 0);
    navigate(`/portfolio/project/${projectId}`);
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
        <Swiper
          ref={swiperRef}
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          grabCursor={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true, // Пауза при наведении курсора
          }}
          speed={800}
          onSwiper={onSwiper}
          onSlideChange={onSlideChange}
        >
          {portfolioData.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="portfolio-card">
                <div className="portfolio-left">
                  <div className="css-carousel">
                    {(Array.isArray(project.images)
                      ? project.images
                      : [project.images]
                    ).map((image, index) => (
                      <img
                        key={index}
                        className="portfolio-img"
                        src={image}
                        alt={`Проект ${index + 1}`}
                      />
                    ))}
                  </div>
                  <p className="portfolio__category">{project.categoryTitle}</p>
                  <div className="portfolio__links">
                    <div className="link">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          className="portfolio__link-img"
                          src={project.linkImg}
                          alt="GitHub repository"
                        />
                      </a>
                    </div>

                    <div className="gitHub">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          className="portfolio__link-img"
                          src={project.githubImg}
                          alt="GitHub repository"
                        />
                      </a>
                    </div>
                  </div>
                  <p className="portfolio__link-title">{project.info}</p>
                </div>
                <div className="portfolio-right">
                  <div className="portfolio-content">
                    <div className="portfolio-header">
                      <h3 className="portfolio-title">{project.title}</h3>
                      <div className="portfolio__role-time">
                        <div className="portfolio__role">
                          <p className="portfolio__role">
                            Роль :
                            <span className="portfolio__role__dop">
                              {project.role}
                            </span>
                          </p>
                        </div>
                        <div className="portfolio__role">
                          <p className="portfolio__role">
                            Время разработки :
                            <span className="portfolio__role__dop">
                              {project.time}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="portfolio__main">
                      <div className="potrfolio__ul">
                        <ul className="portfolio__list">
                          {project && project.responsibilities
                            ? project.responsibilities.map(
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
                        {Object.values(project.techStack || {})
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
                        onClick={() => handleProjectClick(project.id)}
                      >
                        Подробнее
                      </button>
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
