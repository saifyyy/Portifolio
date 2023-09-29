import "./ContactMe.css";

const ContactMe = () => {
  return (
    <>
      <section id="contact ">
        <div className="contact-me2">
          <div className="contactme-t1 pb-3">
            <h2>Newsletter</h2>
          </div>
          <div className="contact-me2-dec"></div>
          <div className="row align-items-center mb-5">
            <div className="col-lg-5 col-md-12">
              <div className="work-togather-text">
                <h2 class="h2-title text-white ">Let's Work Together</h2>
                <p>
                  Are you impressed and want a project done, give a call or
                  email me any time.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-7"></div>
            <div className="col-lg-3 col-md-4">
              <div className="work-togather-form-btn">
                <button
                  onClick={() => {
                    window.open(
                      "https://api.whatsapp.com/send/?phone=923471052993&text&type=phone_number&app_absent=0"
                    );
                  }}
                  class="sec-btn"
                >
                  Connect With Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactMe;
