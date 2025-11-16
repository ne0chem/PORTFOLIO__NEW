import React from "react";
//позволит отображать разную страницу в зависимости от url
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Ribbons from "../../animation/Ribbons/Ribbons";

export default function MainLayout() {
  return (
    <div className="layout">
      <Ribbons
        colors={["#ff0000", "#00ff00", "#0000ff"]} // ← яркие цвета для теста
        baseThickness={50} // ← увеличим толщину
        enableFade={true}
        speedMultiplier={0.7}
      />
      <Header />
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
}
