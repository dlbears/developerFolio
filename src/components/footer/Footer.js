import React, { useContext } from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const { isDark } = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("Modified with ☕ by Dennis Orsini")}
        </p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          Thanks to{" "}
          <a href="https://github.com/saadpasta/developerFolio">
            developerFolio
          </a>
          {" and "}
          <a href="https://github.com/saadpasta">
            Saad Pasta
          </a>
          {" "}for the theme
        </p>
      </div>
    </Fade>
  );
}
