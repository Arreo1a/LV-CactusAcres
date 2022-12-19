import "./ContactPage.scss";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
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
        e.target,
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
          <Link style={{ color: "white" }} to="/cactus-acres">
            <FontAwesomeIcon icon={faCircleArrowLeft} />
          </Link>
        </div>
        <div className="contact">Contact</div>
      </div>

      <div className="left-column-contact-page">
        <div className="contact-bullet-points">
          <div className="bullet-point-group">
            <div className="icon">
              <a
                href="https://goo.gl/maps/nCr7aJTuT1vhmF8n6"
                target="_blank"
                title="Ubicanos en el mapa"
              >
                <FontAwesomeIcon icon={faMapMarkedAlt} />
                <div className="text">Col. LeBarón, CHIH</div>
              </a>
            </div>
          </div>
          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon={faPhone} />
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
          <a
            href="https://api.whatsapp.com/send?phone=525555555555"
            target="_blank"
            title="Contactanos por Whatsapp"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </div>
        <div className="icon-messenger">
          <a
            href="https://m.me/josemiguel.islasvaldez"
            target="_blank"
            title="Contactanos por Messenger"
          >
            <FontAwesomeIcon icon={faFacebookMessenger} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
