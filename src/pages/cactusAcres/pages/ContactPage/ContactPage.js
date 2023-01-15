import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkedAlt,
  faPhone,
  faEnvelope,
  faCircleArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

import {
  faWhatsapp,
  faFacebookMessenger,
} from "@fortawesome/free-brands-svg-icons";

import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

// Components
import CactusAcresNavbar from "../../components/Navbar/CactusAcresNavbar";
import CactusAcresLogo from "../../images/c-1.jpg";

// Styles
import "./ContactPage.scss";

const ContactPage = () => {
  const [language, setLanguage] = useState(false);

  const [t, i18n] = useTranslation(["welcome"]);

  const changeToEnglish = () => {
    i18n.changeLanguage("en");
    setLanguage(!language);
  };

  const changeToSpanish = () => {
    i18n.changeLanguage("es");
    setLanguage(!language);
  };

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dr57svc",
        "template_dev8ezp",
        form.current,
        "mFN4kVXDFIStEkkSu"
      )
      .then(
        (result) => {
          if (result) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Your email has been sent!",
              showConfirmButton: false,
              timer: 2000,
            });
          }
          console.log("SUCCESS!", result.status, result.text);
        },

        (error) => {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "An error has occurred!",
            showConfirmButton: false,
            timer: 2000,
          });
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <>
      <CactusAcresNavbar
        currentLanguage={language}
        changeToEnglish={changeToEnglish}
        changeToSpanish={changeToSpanish}
      />

      <div className="contactPage">
        <div className="contactCard">
          <div className="topSectionContainer">
            <div className="titleContainer">
              <span className="titleText">{t("contact-title-text")}</span>
              <span className="infoPieceContainer">
                <a
                  href="https://goo.gl/maps/nCr7aJTuT1vhmF8n6"
                  target="_blank"
                  title="Locate us on the map"
                  className="icon"
                >
                  <FontAwesomeIcon icon={faMapMarkedAlt} />
                  <span className="text">Col. LeBarón, CHIH</span>
                </a>
              </span>
            </div>
            {/* <span className="reachUsText">
              You can reach us anytime via{" "}
              <span className="emailText">cactus-acres@gmail.com</span>
            </span> */}
          </div>

          <hr />

          <div className="allInputsContainer">
            <form ref={form} onSubmit={sendEmail} className="formWrapper">
              <div className="inputContainer">
                <div className="inputTitle">Name</div>
                <input
                  className="formInput fromInputSmall"
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                />
              </div>
              <div className="inputContainer">
                <div className="inputTitle">Email</div>
                <input
                  className="formInput fromInputSmall"
                  type="email"
                  name="user_email"
                  placeholder="you@email.com"
                />
              </div>

              <div className="inputContainer">
                <div className="inputTitle">Message</div>
                <textarea
                  className="formInput fromInputTextArea"
                  name="message"
                  placeholder="Message"
                />
              </div>

              <div className="inputContainer">
                <button className="formSubmitBtn" type="submit">
                  Send
                </button>
              </div>
            </form>
          </div>

          <div className="iconsSection">
            <p className="alsoReachUsHereText">You can also reach us here</p>
            <div className="iconsContainer">
              <div className="iconWhatsapp">
                <a
                  href="https://api.whatsapp.com/send?phone=525555555555"
                  target="_blank"
                  title="Contact us by Whatsapp"
                >
                  <FontAwesomeIcon icon={faWhatsapp} />
                </a>
              </div>
              <div className="iconMessenger">
                <a
                  href="https://m.me/josemiguel.islasvaldez"
                  target="_blank"
                  title="Contact us by Messenger"
                >
                  <FontAwesomeIcon icon={faFacebookMessenger} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* _____________________________________ */}

        <div className="contactCardLarge">
          <div className="leftSide">
            <img src={CactusAcresLogo} alt="" className="leftImage" />
          </div>
          <div className="rightSide">
            <div className="topSectionContainer">
              <div className="titleText">{t("contact-title-text")}</div>
              <span className="reachUsText">
                You can reach us anytime via{" "}
                <span className="emailText">cactus-acres@gmail.com</span>
              </span>
            </div>

            <div className="extraInformationContainer">
              <div className="infoPieceContainer">
                <a
                  href="https://goo.gl/maps/nCr7aJTuT1vhmF8n6"
                  target="_blank"
                  title="Locate us on the map"
                  className="icon"
                >
                  <FontAwesomeIcon icon={faMapMarkedAlt} />
                </a>
                <div className="text">Col. LeBarón, CHIH</div>
              </div>
              <div className="infoPieceContainer">
                <a
                  href="tel:+525555555555"
                  target="_blank"
                  title="Call for more info"
                  className="icon"
                >
                  <FontAwesomeIcon icon={faPhone} />
                </a>
                <div className="text">555-555-5555</div>
              </div>
            </div>

            <div className="iconsSection">
              <div className="icon-whatsapp">
                <a
                  href="https://api.whatsapp.com/send?phone=525555555555"
                  target="_blank"
                  title="Contact us by Whatsapp"
                >
                  <FontAwesomeIcon icon={faWhatsapp} />
                </a>
              </div>
              <div className="icon-messenger">
                <a
                  href="https://m.me/josemiguel.islasvaldez"
                  target="_blank"
                  title="Contact us by Messenger"
                >
                  <FontAwesomeIcon icon={faFacebookMessenger} />
                </a>
              </div>
            </div>

            <div className="allInputsContainer">
              <form ref={form} onSubmit={sendEmail} className="formWrapper">
                <div className="inputContainer">
                  <div className="inputTitle">Name</div>
                  <input
                    className="formInput fromInputSmall"
                    type="text"
                    name="user_name"
                    placeholder="Your Name"
                  />
                </div>
                <div className="inputContainer">
                  <div className="inputTitle">Email</div>
                  <input
                    className="formInput fromInputSmall"
                    type="email"
                    name="user_email"
                    placeholder="you@email.com"
                  />
                </div>

                <div className="inputContainer">
                  <div className="inputTitle">Message</div>
                  <textarea
                    className="formInput fromInputTextArea"
                    name="message"
                    placeholder="Message"
                  />
                </div>

                <div className="inputContainer">
                  <button className="formSubmitBtn" type="submit">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* <hr />

      <div className="content-contact-page-wrapper">
        <div className="left-column-contact-page">
          <div className="contact-bullet-points">
            <div className="bullet-point-group">
              <div className="icon">
                <a
                  href="https://goo.gl/maps/nCr7aJTuT1vhmF8n6"
                  target="_blank"
                  title="Locate us on the map"
                >
                  <FontAwesomeIcon icon={faMapMarkedAlt} />
                </a>
                <div className="text">Col. LeBarón, CHIH</div>
              </div>
            </div>
            <div className="bullet-point-group">
              <div className="icon">
                <a
                  href="tel:+525555555555"
                  target="_blank"
                  title="Call for more info"
                >
                  <FontAwesomeIcon icon={faPhone} />
                </a>
              </div>

              <div className="text">555-555-5555</div>
            </div>

            <div className="bullet-point-group">
              <div className="icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>

              <div className="text">cactus-acres@gmail.com</div>
            </div>
          </div>
        </div>
        <div className="rigth-column-contact-page">
          <form ref={form} onSubmit={sendEmail} className="form-wrapper">
            <div className="name-wrapper">
              <input type="text" name="user_name" placeholder="Name" />
            </div>
            <div className="email-wrapper">
              <input type="email" name="user_email" placeholder="Email" />
            </div>
            <div className="message-wrapper">
              <textarea name="message" placeholder="Message" />
            </div>
            <div className="btn-wrapper">
              <button type="submit">SEND</button>
            </div>
          </form>
        </div>
        <div className="footer-contact-page">
          <div className="icon-whatsapp">
            <a
              href="https://api.whatsapp.com/send?phone=525555555555"
              target="_blank"
              title="Contact us by Whatsapp"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </div>
          <div className="icon-messenger">
            <a
              href="https://m.me/josemiguel.islasvaldez"
              target="_blank"
              title="Contact us by Messenger"
            >
              <FontAwesomeIcon icon={faFacebookMessenger} />
            </a>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default ContactPage;
