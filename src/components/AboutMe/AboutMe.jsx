import "./AboutMe.css";
import decor1 from "../../images/decoration/dots-1.png";
import mail from "../../images/decoration/mail-to.svg";
import reactagle from "../../images/decoration/Rectangle-7.png";
import shady from "../../images/decoration/dots.png";
const AboutMe = () => {
  const data = `
  <div>
  <p>I'm 23 years old creative 
  <strong>SOFTWARE DEVELOPER
  </strong>
  <strong>
   </strong>based in 
   <a target='_blank' href="https://maps.app.goo.gl/xBy8XkDL2Ken6L6z8">
   <strong>Lahore, Pakistan
   </strong>
   </a> specializing in User Interface Design and Development. I build clean, appealing, and functional interfaces which comply with the latest web standards🔥
   <span style="color:#2ecc71">.</span>
   </p>
  <p>I'm currently a first year Virtual University student.
  <span style="color:#3498db"> </span>
  <strong>BS in Computer Science</strong>
  <span style="color:#3498db"> </span>course. I'm a&nbsp; full stack web developer passionate about Open Source.
  </p>
  </div>
  `;
  return (
    <main id="about">
      <div className="aboutMe-container">
        <div className="about-decor">
          <div className="about-dots">
            <img src={decor1} alt="" />
          </div>
          <div className="about-rect">
            <img src={reactagle} alt="" />
          </div>
          <div className="about-shady">
            <img src={shady} alt="" />
          </div>
        </div>
        <div className="abouMe-row">
          <div
            className=" col-lg-6 col-md-5 col-sm-12 about-img"
            data-aos="fade-up-right"
          >
            <img src={mail} alt="" />
          </div>
          <div
            className=" col-lg-6 col-md-7  col-sm-12 about_myinfo"
            data-aos="fade-up-left"
          >
            <div className="title">
              <h2>ABOUT ME</h2>
              <h3>Why hire me for your next project?</h3>
            </div>
            <div className="about-description">
              <div id="foo" unselectable="on" className="unselectable">
                <div
                  dangerouslySetInnerHTML={{
                    __html: data,
                  }}
                />
              </div>
            </div>

            <div className="itscv">
              <a
                href="https://drive.google.com/file/d/1s7o690ak9NWIF-CsZhGVwOwlYxVV9b7J/view"
                download="RESUME.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="download-cv">
                  Download Cv <i class="bx bx-download"></i>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutMe;
