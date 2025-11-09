import React from "react";
//позволит отображать разную страницу в зависимости от url
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

export default function MainLayout() {
  return (
    <div className="layout">
      <Header />
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
}
