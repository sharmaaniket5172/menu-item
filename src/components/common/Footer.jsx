import React from "react";
import {
  AiFillTwitterSquare,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";


export default function Footer() {
  return (
<div className="footer">
      <ul className="footer-social">
        <li>
          <a target="_blank" href="/">
            <AiFillTwitterSquare />
            <span>Twitter</span>
          </a>
        </li>
        <li>
          <a target="_blank" href="/">
            <AiFillFacebook />
            <span>Facebook</span>
          </a>
        </li>
        <li>
          <a target="_blank" href="/">
            <AiFillInstagram />
            <span>Instagram</span>
          </a>
        </li>
      </ul>
      <div className="footer-logo">
        <a href="/" className="footer-url">
          <img src={"/logo.png"} alt="Logo" />
        </a>
      </div>
      <div className="footer-copyright">
        {" "}
        © 2021 by{" "}
        <a href="/" target="_blank" rel="nofollow">
          FlyTemplates
        </a>{" "}
        | Catering and Food WordPress Theme
      </div>
    </div>
  )
}
