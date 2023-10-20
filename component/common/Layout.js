import React, { Children, useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Loader from "./Loader";

const Layout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const addMouseHover = (element, cursor) => {
    element.addEventListener("mouseover", () => {
      cursor.classList.add("expand");
    });
    element.addEventListener("mouseleave", () => {
      cursor.classList.remove("expand");
    });
  };
  const cursorAnimation = () => {
    if (typeof window !== "undefined" && window.innerWidth > 992) {
      var cursor = document.querySelector(".custom-cursor");
      window.addEventListener("mousemove", function (e) {
        cursor.setAttribute(
          "style",
          "top: " + e.clientY + "px; left: " + e.clientX + "px;"
        );
      });
      var links = document.querySelectorAll("a");
      var buttons = document.querySelectorAll("button");
      links.forEach(function (link) {
        addMouseHover(link, cursor);
      });
      buttons.forEach(function (button) {
        addMouseHover(button, cursor);
      });
    }
  };
  useEffect(() => {
    cursorAnimation();
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <div className="layout">
      <Loader isLoading={isLoading}/>
      <Header />
      {children}
      <Footer />
      <span className="custom-cursor"></span>
    </div>
  );
};

export default Layout;
