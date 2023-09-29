import "./Services.css";
import api from "../../images/decoration/api.png";
import web from "../../images/decoration/web.png";
import soft from "../../images/decoration/soft.png";
import figma from "../../images/decoration/figma.png";
const Services = () => {
  const servicesDetails = [
    {
      icon_image: soft,
      service_name: "Software Development",
      service_description:
        "I offer world-class custom software development services designed specifically for your business and ready to satisfy your exclusive needs.",
      learn_more: "",
      shadow_icon: "",
      id: 1,
    },
    {
      icon_image: web,
      service_name: "Web Development",
      service_description:
        "As a Web developer use coding languages like  HTML, CSS, JavaScript, and PHP to build websites and web applications.",
      learn_more: "",
      shadow_icon: "",
      id: 2,
    },
    {
      icon_image: api,
      service_name: "Api Integration",
      service_description:
        "I offer API integration service in existing applications or in software I create from scratch.",
      learn_more: "",
      shadow_icon: "",
      id: 3,
    },
    {
      icon_image: figma,
      service_name: "Figma to Code",
      service_description:
        "As a software developer, I create pixel-perfect HTML and React interfaces from Figma designs, ensuring precision and user satisfaction.",
      learn_more: "",
      shadow_icon: "",
      id: 4,
    },
  ];
  return (
    <>
      <section id="services">
        <div className="service-container">
          <div className="service-title">
            <h2>What Service i Offer you</h2>

            <h3>Services</h3>
          </div>

          <div className="service-row">
            {servicesDetails &&
              servicesDetails.map((service) => (
                <div
                  className=" my-service"
                  key={service.id}
                  data-aos="zoom-in-up"
                  data-aos-duration="1500"
                >
                  <div className="ser-back">
                    <img src={service.icon_image} alt="" />
                  </div>
                  <h4 className="web">{service.service_name}</h4>
                  <p className="service-info">{service.service_description}</p>
                  <h6 className="learn-more">{service.learn_more}</h6>
                  <div className="shadow-icon">
                    <i class={service.shadow_icon}></i>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
