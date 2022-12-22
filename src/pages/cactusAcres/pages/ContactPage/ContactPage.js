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
import Swal from "sweetalert2";

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
    </div>
  );
};

export default ContactPage;
