import React from "react";
import "./ThreadsBackground.css";

const ThreadsBackground = () => {
  return (
    <div className="threads-background">
      {[...Array(80)].map((_, i) => (
        <div
          key={i}
          className="thread"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 20}s`,
            animationDuration: `${15 + Math.random() * 10}s`,
          }}
        />
      ))}
    </div>
  );
};

export default ThreadsBackground;
