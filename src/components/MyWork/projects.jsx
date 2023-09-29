// import { useGetProjectsQuery } from "../../Api/api";
import { useEffect, useState } from "react";
import "./projects.css";
import React from "react";
import base from "../../images/decoration/base.png";
import jamia from "../../images/decoration/jamia.png";
import PORTFOLIO from "../../images/decoration/PORTFOLIO.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Projects = () => {
  const img_300 = "http://drive.google.com/uc?id=";

  const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: true,
    autoplay: false,
    navText: false,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      310: {
        items: 1,
      },
      500: {
        items: 1,
      },
      600: {
        items: 1,
      },
      740: {
        items: 2,
      },
      1000: {
        items: 2.7,
      },
      1300: {
        items: 3,
      },
      1440: {
        items: 3,
      },
    },
  };
  const [projectsDetails, setProjectsDetails] = useState([
    {
      about_avatar: jamia,
      language_used: "Wordpress | PHP | HTML | CSS",
      Project_title: "Islamic School Website",
      Project_info:
        "This is a multi-language Islamic School website created in WordPress.",
      demo_link: "http://jamiarahmania.org/",
      project_link: "",
      id: 1,
    },
    {
      about_avatar: base,
      language_used: "React | TypeScript | Linting | Storybook",
      Project_title: "React Components Library (pixel-base)",
      Project_info:
        "Check out my npm-published React component library, designed to simplify your front-end development. With a range of versatile and well-documented components, you can build stunning web applications effortlessly.",
      demo_link:
        "https://pixelone-corp.github.io/pixel-base/?path=/docs/pixel-chart--line-chart",
      project_link: "https://github.com/pixelone-corp/pixel-base",
      id: 2,
    },
    {
      about_avatar: PORTFOLIO,
      language_used: "React | Jquery",
      Project_title: "Simple Project",
      Project_info:
        "This is a simple dynamic portfolio that one can easily change his/her info through the django admin",
      demo_link: "",
      project_link: "",
      id: 3,
    },
  ]);

  return (
    <div className="mywork " id="work">
      <div className="mywork-title">
        <h2>Check Out My Reacet Projects</h2>
        <h3>My Work</h3>
      </div>
      <div className="project-row">
        {projectsDetails?.length && (
          <OwlCarousel className="owl-theme" {...options}>
            {projectsDetails?.map((details) => (
              <div className="project" data-aos="fade-up" kay={details.id}>
                <div className="project-img">
                  <img src={details.about_avatar} alt="" className="work-img" />
                </div>

                <div className="date-posted">
                  <div className="who-post">
                    <p className="admin">{details.language_used}</p>
                  </div>
                </div>
                <div className="work-details">
                  <h2>{details.Project_title}</h2>
                  <p className="work-info">{details.Project_info}</p>
                  <div className="project-links">
                    <a
                      href={details.demo_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h6 className="learnmore">
                        <i class="fa fa-laptop" aria-hidden="true"></i>&nbsp;
                        Live Demo
                      </h6>
                    </a>
                    <a
                      href={details.project_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h6 className="learnmore">
                        <i class="fa fa-github" aria-hidden="true"></i> &nbsp;
                        Source Code
                      </h6>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </OwlCarousel>
        )}
      </div>
    </div>
  );
};

export default Projects;
