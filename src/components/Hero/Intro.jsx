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
            <img
              src={
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAABbCAMAAAC/DqBZAAAAjVBMVEUAAAAwNFAmKEAuMk8uMk8uMk8rL0oSFTooLEUuMk8ZHz4vMk8uMk8nK0ciJEIjKEUkJz4jKUAoLEYnKUYeHjojJj4oK0QuMlAjJz4oLEclKkIkJ0AkJj4mKkImKkMkJz8kJz4lKkMjJkAuMk8kJz4jJj4iJT0kJj4tME8kJz4uMlAuM1AkJ0AvMlEoLEdAozzjAAAAL3RSTlMxAf4B/e3WABYB4CnJuJBEXeSYbDQhFN2dYQj0hXzEudWcrFFhqUUtjX1VOSHBTH0nXLrkAAALESURBVGje1NXbboJAFIXhxUqTsVM5K6KigMd6fP/HqyEhU6LWjQwX/e5ISBY/kAz+lRA90wVn6FXImxj90XtyHjKFYT/hMAI2vKIfOiNd3HjMYVhPqOxYwrCdUNE8wzqXTLW5TOnDrlFGhoDh89BTgpFT20xIq4SmkonVhOz+iRU3NhNKPFBQwYp5nXAnYWkrYYnHYm7tJOw1niG7JxxMwiMpvX4SjBnn3RK2JuGJkAnacU/r9TQyCYXG31Ycow1v7VSGUx9QW3KBl5i1Whg6tWOVEOM1DtotGMMqQSAg5I7Ob+cYImdCTH02Ji6Q2RBiS6dJWFEQYienyYVI1mHiCpF9hwkfIjkh5joNQ8gwgNykMTGDDAuIRYN3fijIzyQ1Jr/NwEcJGY9jcQJzD0m98BVBKORCnDDDjX/5uA1MFgpSO3qihIBBfaO+RgotBBQnvEkxkyWsOpztiSRhCgHZp5AnyDF4nTCGYfE9mQSu0ElK3WsC4ogbPOfn7yWon3brbSlhGAgD8K6bEEJ6oLQ2FqUKVawovv/jCVUnOkxSQrjM9wD/ntqZZItitXx5mt8MWrBqvEaYbT7XdXP3cTOYTqeTyYSY5FwJ1wj56BrytF1uX+d/Y4+5SnFGRHjACscIW9ca3p5P2+USkfA/UueOMNvcr+vbh0cT+517wAgJrVjqGGFYw+/VTLtDrjS5bqRtL6vBabsH6EdavsjVMRZ/2kUT64/2YFEzkxuEC7DpMIy5tV1ylQo7cCgVYSjS4LRgwTWSCtwKGXrqGYxpw2rIDMatZWiFcQXDCxHP4Dy5osBLj6v6SwZhHfhYct9BSKXgJ9N+fwjvKvDWelyEmRG8iB3Hc6oQU/sKLiQaNVqEpNqVEKJ13oRQJbWAUKLRloWxJHnP4TrEqjcvpCMiyVVf53BVZdr0Ohlo3dVpCVEURVEU2X0B4n8rmwpXX2sAAAAASUVORK5CYII="
              }
              alt=""
            />
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
