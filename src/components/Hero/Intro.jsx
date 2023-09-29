import decor3 from "../../images/decoration/Group-31.png";
import contact from "../../images/decoration/contact.svg";
import "./Intro.css";
const Intro = () => {
  const contacts1Details = [
    {
      link: "https://www.linkedin.com/in/saif-ur-rehman-938842208/",
      social_icon: "bx bxl-linkedin",
      id: 1,
    },
    {
      link: "https://api.whatsapp.com/send/?phone=923471052993&text&type=phone_number&app_absent=0",
      social_icon: "bx bxl-whatsapp",
      id: 2,
    },
    {
      link: "https://www.facebook.com/profile.php?id=100017387024411",
      social_icon: "fa fa-facebook",
      id: 3,
    },
  ];
  return (
    <>
      <section className=" intro-page" id="home">
        <div className="decorations">
          <div className="decor-dot2">
            <img src={decor3} alt="" />
          </div>

          <div className="parcol"></div>
        </div>
        <div className="small-intro">
          <div className="intro-row">
            <div className="col-lg-5  col-md-6 col-sm-12 intro-left">
              <div className="intro-name">
                <h3
                  className="hello"
                  data-aos="fade-down"
                  data-aos-duration="1500"
                >
                  Software Developer
                </h3>
                <h3
                  className="name"
                  data-aos="fade-down"
                  data-aos-duration="1600"
                >
                  Hey! I Am
                </h3>
                <h3
                  className="job  text-animate"
                  data-aos="fade-down"
                  data-aos-duration="1700"
                >
                  Saif Ur Rehman
                </h3>
                <p
                  className="myinfo"
                  data-aos="fade-down"
                  data-aos-duration="1800"
                >
                  I Am a Pakistan based Software Developer passionate and
                  experienced in building Web applications.
                  <br />
                  Currently working at{" "}
                  <a target={"_blank"} href={"https://pixelone.app/"}>
                    Pixel Software Solutions (PSS).
                  </a>
                </p>
              </div>
              <div
                className="intro-btns"
                data-aos="fade-up"
                data-aos-duration="1900"
              >
                <a href={`mailto:${""}`} className="contactMe">
                  <button className="contact-me">
                    Hire me <i class="bx bx-send "></i>
                  </button>
                </a>
              </div>
              <div
                class="intro-contact"
                data-aos="fade-up"
                data-aos-duration="1800"
              >
                <span>Follow Me:</span>
                <ul>
                  <li>
                    {contacts1Details &&
                      contacts1Details.map((data1) => (
                        <a
                          href={data1.link}
                          className="icon-link"
                          target="_blank"
                          rel="noopener noreferrer"
                          key={data1.id}
                        >
                          <i className={data1.social_icon}></i>
                        </a>
                      ))}
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-lg-7 col-md-6 col-sm-12 left-img "
              data-aos="fade-down-left"
            >
              <div className="ff">
                <img className="intro-img" src={contact} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Intro;
