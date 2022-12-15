import "./ContactPage.scss";
import React, { useRef } from "react";
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

const ContactPage = () => {
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
          console.log("SUCCESS!", result.status, result.text);
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };
  return (
    <div className="content-contact-page-wrapper">
      <div className="header-contact-page-wrapper">
        <div className="back-arrow">
          <FontAwesomeIcon icon={faCircleArrowLeft} />
        </div>
        <h1>Contact</h1>
      </div>
      ;
      <div className="left-column-contact-page">
        <div className="contact-bullet-points">
          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon={faMapMarkedAlt} />
            </div>

            <div className="text">Col. LeBarón, CHIH</div>
          </div>
          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon={faPhone} />
            </div>

            <div className="text">636-110-6896</div>
          </div>

          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>

            <div className="text">josmislas12@gmail.com</div>
          </div>
        </div>
      </div>
      <div className="rigth-column-contact-page">
        <div className="contact-email-wrapper">
          <form ref={form} onSubmit={sendEmail}>
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
              <input type="submit" value="Send" />
            </div>
          </form>
        </div>
      </div>
      <div className="footer-contact-page">
        <div className="icon-whatsapp">
          <FontAwesomeIcon icon={faWhatsapp} />
        </div>
        <div className="icon-messenger">
          <FontAwesomeIcon icon={faFacebookMessenger} />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
