import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { BsGithub, BsLink } from "react-icons/bs";
import styles from "./ProjectCard.module.css";
import { HiArrowRight } from "react-icons/hi";

const allProjects = () => {
  return <alert>Deepak</alert>;
};

const ProjectCard = () => {
  const [sliderRef, setSliderRef] = useState(null);

  const sliderSettings = {
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const projects = [
    {
      img: "/projects/Koolz.png",
      name: "Koolz.com",
      tech: [
        "React JS",
        "TypeScript",
        "Redux",
        "Axios",
        "Redux-thunk",
        "React-Router",
        "Chakra-UI",
      ],
      link: "https://koolz.vercel.app/",
      dec: "The Koolz.com Clone is a fully functional e-commerce website that allows users to browse and purchase a variety of products.",
      code: "https://github.com/deepakpatil26/koovs-Website-Clone",
    },
    {
      img: "/projects/LifeStyleStores.png",
      name: "Lifestyles Stores clone",
      tech: [
        "React",
        "Redux",
        "Axios",
        "JavaScript",
        "HTML",
        "CSS",
        "Material-UI",
        "Tailwind",
      ],
      link: "https://outfitstore.vercel.app/",
      dec: "Lifestyle is India's leading fashion destination for the latest trends. Part of Dubai based retail and hospitality conglomerate",
      code: "https://github.com/deepakpatil26/spiffy-farm-6274",
    },
    {
      img: "/projects/boAt.png",
      name: "BoatLifeStyle.com-Clone",
      tech: ["JavaScript", "HTML", "CSS"],
      link: "https://deluxe-sunshine-85cb19.netlify.app/",
      dec: "boAt is your digital shopping assistant dedicated to saving you time,money and assure you get a quality product. ",
      code: "https://github.com/deepakpatil26/BoatLifeStyle-clone",
    },
    {
      img: "/projects/CultFit.png",
      name: "Cult.fit Clone",
      tech: ["JavaScript", "HTML", "CSS", "Chakra-UI"],
      link: "https://astounding-scone-73c2d5.netlify.app/",
      dec: "The project is a clone of Cult.fit which is a health and fitness website",
      code: "https://github.com/deepakpatil26/acrid-land-8684",
    },
    {
      img: "/projects/Zara.png",
      name: "Zara.com clone",
      tech: ["JavaScript", "HTML", "CSS"],
      link: "https://quiet-begonia-859735.netlify.app/",
      dec: "A Spanish multi-national retail clothing chain.",
      code: "https://github.com/deepakpatil26/moldy-care-8778",
    },
  ];

  return (
    <div className={styles.content}>
      <div className={styles.controls}>
        <button onClick={sliderRef?.slickPrev}>
          <FaChevronLeft />
        </button>
        <button onClick={sliderRef?.slickNext}>
          <FaChevronRight />
        </button>
      </div>

      <Slider ref={setSliderRef} {...sliderSettings}>
        {projects.map((card, index) => (
          <div key={index} className={styles.card}>
            <img src={card.img} alt={card.name} className={styles.card_img} />
            <div className={styles.text_info}>
              <div className={styles.card_header}>
                <h2>{card.name}</h2>
              </div>
              <div className={styles.techContainer}>
                {card.tech.map((item) => (
                  <div className={styles.tech}>{item}</div>
                ))}
              </div>

              <div className={styles.card_header}>
                <h6>{card.dec}</h6>
              </div>

              <div className={styles.linkdiv}>
                <a className={styles.link} href={card.link} target="_blank">
                  <BsLink />
                </a>

                <a className={styles.link} href={card.code} target="_blank">
                  <BsGithub />
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* <div className={styles.projects__viewAll}>
        <a>
          <button onClick={allProjects} className={styles.viewAllBtn}>
            View All
            <HiArrowRight className={styles.viewArr} />
          </button>
        </a>
      </div> */}
    </div>
  );
};

export default ProjectCard;
