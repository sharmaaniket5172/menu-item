import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import foodimg1 from "../../assets/images/food01.jpg";
import foodimg2 from "../../assets/images/food02.jpg";
import foodimg3 from "../../assets/images/food03.jpg";

const fadeImages = [
  {
    url: foodimg1,
    title: "What is Lorem Ipsum?",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000First Slide",
  },
  {
    url: foodimg2,
    title: "Where can I get some",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going t",
  },
  {
    url: foodimg3,
    title: "What is Lorem Ipsum?",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000First Slide",
  },
];

const Slider = () => {
  return (
    <div className="slide-container">
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div className="sliderWrapper" key={index}>
            <img src={fadeImage.url} alt="default img" />
            <div className="sliderCaption">
              <h2 className="productTitle">{fadeImage.title}</h2>
              <p>{fadeImage.description}</p>
            </div>
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default Slider;