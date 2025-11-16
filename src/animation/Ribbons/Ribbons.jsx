import { useEffect, useState, useCallback } from "react";
import "./Ribbons.css";

export default function Ribbons() {
  const [positions, setPositions] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const trailLength = 80; // Уменьшил для большей производительности

  // Ваши цвета в улучшенном формате
  const colors = [
    {
      hex: "#61dca3",
      hsl: "hsl(151, 64%, 62%)",
      rgba: "rgba(97, 220, 163, 0.8)",
    }, // primary-green
    {
      hex: "#61b3dc",
      hsl: "hsl(203, 64%, 62%)",
      rgba: "rgba(97, 179, 220, 0.6)",
    }, // primary-blue
    {
      hex: "#e8f5e8",
      hsl: "hsl(120, 33%, 94%)",
      rgba: "rgba(232, 245, 232, 0.4)",
    }, // text-light
  ];

  // Проверка мобильного устройства
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Плавное перемещение точек
  const lerp = (start, end, factor) => {
    return start + (end - start) * factor;
  };

  useEffect(() => {
    if (isMobile) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let animatedX = mouseX;
    let animatedY = mouseY;

    const posHistory = Array(trailLength).fill({ x: mouseX, y: mouseY });
    let animationId;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleTouchMove = (e) => {
      e.preventDefault();
      mouseX = e.touches[0].clientX;
      mouseY = e.touches[0].clientY;
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("touchmove", handleTouchMove, { passive: false });

    const updateTrail = () => {
      // Плавное следование за курсором
      animatedX = lerp(animatedX, mouseX, 0.3);
      animatedY = lerp(animatedY, mouseY, 0.3);

      // Добавляем небольшую динамику для более "живого" эффекта
      const time = Date.now() * 0.001;
      const waveX = Math.sin(time * 2) * 2;
      const waveY = Math.cos(time * 2) * 2;

      posHistory.unshift({
        x: animatedX + waveX,
        y: animatedY + waveY,
      });

      if (posHistory.length > trailLength) posHistory.pop();

      setPositions([...posHistory]);
      animationId = requestAnimationFrame(updateTrail);
    };

    updateTrail();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("touchmove", handleTouchMove);
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [isMobile]);

  // Функция для получения цвета с плавными переходами
  const getColor = (progress) => {
    const colorProgress = progress * (colors.length - 1);
    const startIndex = Math.floor(colorProgress);
    const endIndex = Math.min(colors.length - 1, startIndex + 1);
    const blend = colorProgress - startIndex;

    if (startIndex === endIndex) {
      return colors[startIndex].hex;
    }

    // Плавный переход между цветами
    const startColor = colors[startIndex].hex;
    const endColor = colors[endIndex].hex;

    return `color-mix(in srgb, ${startColor} ${
      (1 - blend) * 100
    }%, ${endColor})`;
  };

  if (isMobile) {
    return null; // Не показываем на мобильных
  }

  return (
    <div className="ribbons-container">
      {positions.map((pos, index) => {
        if (!pos.x || !pos.y) return null;

        const progress = index / trailLength;
        const size = 15 * (1 - progress * 0.8); // Размер от 16px до 3px
        const opacity = 1 - progress * 0.9; // Более плавное исчезновение
        const scale = 1 - progress * 0.6;
        const blur = progress * 3;

        // Динамическое смещение для волнообразного эффекта
        const timeOffset = Date.now() * 0.001 + index * 0.1;
        const waveOffsetX = Math.sin(timeOffset) * (progress * 10);
        const waveOffsetY = Math.cos(timeOffset) * (progress * 8);

        return (
          <div
            key={index}
            className="trail-dot"
            style={{
              left: `${pos.x + waveOffsetX}px`,
              top: `${pos.y + waveOffsetY}px`,
              width: `${size}px`,
              height: `${size}px`,
              background: `radial-gradient(circle, 
                ${getColor(progress)} 0%, 
                ${colors[Math.floor(progress * colors.length)]?.hex}00 70%)`,
              opacity: opacity,
              transform: `translate(-50%, -50%) scale(${scale})`,
              filter: `
                blur(${blur}px) 
                drop-shadow(0 0 ${size * 0.3}px ${getColor(progress)})
              `,
              boxShadow: `
                0 0 ${size * 0.5}px ${size * 0.3}px var(--glass-border),
                inset 0 0 ${size * 0.3}px ${colors[0].hex}
              `,
            }}
          />
        );
      })}
    </div>
  );
}
