import "./progress.css";
import HTML from "../../images/decoration/html.png";
import bootstrap from "../../images/decoration/bootstrap.svg";
import react from "../../images/decoration/react.png";
import php from "../../images/decoration/php.png";
import sql from "../../images/decoration/sql.png";
import typee from "../../images/decoration/type.png";
import node from "../../images/decoration/node.png";
import javascript from "../../images/decoration/javascript.png";
import docker from "../../images/decoration/docker.png";
import css from "../../images/decoration/css.png";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import $ from "jquery";

var nav = $("body");

if (nav.length) {
  var offsetTop = nav.offset().top;
  $(window).on("scroll", function () {
    var height = $(window).height();
    if ($(window).scrollTop() + height > offsetTop) {
      $(".fullwidth").each(function () {
        $(this)
          .find(".skill-bar")
          .animate(
            {
              width: $(this).attr("data-percent"),
            },
            2000
          );
      });
    }
  });
}

const Progress = () => {
  const icons = [
    {
      id: 1,
      lang_name: "HTML5",
      icon: HTML,
      exp_level: "Intermediate",
    },

    {
      id: 2,
      lang_name: "React",
      icon: react,
      exp_level: "Intermediate",
    },
    {
      id: 3,
      lang_name: "PHP",
      icon: php,
      exp_level: "Junior",
    },
    {
      id: 5,
      lang_name: "JavaScript",
      icon: javascript,
      exp_level: "Intermediate",
    },
    {
      id: 4,
      lang_name: "SQL",
      icon: sql,
      exp_level: "Junior",
    },

    {
      id: 6,
      lang_name: "TypeScript",
      icon: typee,
      exp_level: "Intermediate",
    },
    {
      id: 7,
      lang_name: "Node",
      icon: node,
      exp_level: "Beginner",
    },
    {
      id: 2,
      lang_name: "Bootstrap",
      icon: bootstrap,
      exp_level: "Intermediate",
    },
    {
      id: 8,
      lang_name: "Docker",
      icon: docker,
      exp_level: "Junior",
    },
    {
      id: 9,
      lang_name: "CSS",
      icon: css,
      exp_level: "Intermediate",
    },
  ];

  const responsive = {
    0: {
      items: 1,
    },
    380: {
      items: 1,
    },
    512: {
      items: 2,
    },
    665: {
      items: 3,
    },
    767: {
      items: 3,
    },
    870: {
      items: 4,
    },
    1024: {
      items: 6,
    },
    1265: {
      items: 6,
    },
  };

  const items = icons?.map((details4) => {
    return (
      <div className="mylang" title={details4.lang_name} key={details4.id}>
        <div className="lang-info">
          <div className="lang-img">
            <img src={details4.icon} alt="" />
          </div>
          <h3>{details4.lang_name}</h3>
          <p className={`${details4.exp_level}`}>{details4.exp_level}</p>
        </div>
      </div>
    );
  });
  return (
    <section id="skills">
      <div className="progress-container">
        <div className="progress-title">
          <h2>My Skills Progress so far</h2>

          <h3>My Skills</h3>
        </div>
        <div className="progress-row2">
          <div className="lang">
            <AliceCarousel
              infinite
              autoPlay
              disableButtonsControls
              disableDotsControls
              mouseTracking
              autoPlayInterval={1000}
              items={items}
              responsive={responsive}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Progress;
