import { useEffect } from "react";

const useWow = () => {
  useEffect(() => {
    const initializeWow = async () => {
      try {
        // Ждем пока DOM полностью готов
        if (document.readyState === "loading") {
          document.addEventListener("DOMContentLoaded", initWow);
        } else {
          await initWow();
        }
      } catch (error) {
        console.log("❌ WOW.js error:", error);
        initFallbackAnimations();
      }
    };

    const initWow = async () => {
      const wowModule = await import("wow.js");
      const WOW = wowModule.default || wowModule;

      // Даем время на рендер компонентов
      setTimeout(() => {
        const wow = new WOW({
          boxClass: "wow",
          animateClass: "animate__animated",
          offset: 0, // уменьшаем offset для теста
          mobile: true,
          live: true,
          scrollContainer: null,
          resetAnimation: true, // добавляем reset
        });

        wow.init();
        console.log(
          "✅ WOW.js инициализирован, элементов:",
          document.querySelectorAll(".wow").length
        );
      }, 100);
    };

    const initFallbackAnimations = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("animate__animated");
              // Добавляем конкретный класс анимации
              if (entry.target.classList.contains("animate__backInUp")) {
                entry.target.style.animationName = "backInUp";
              }
            }
          });
        },
        { threshold: 0.1 }
      );

      document.querySelectorAll(".wow").forEach((el) => {
        observer.observe(el);
      });
    };

    initializeWow();
  }, []);
};

export default useWow;
