import React from "react";
import Footer from "../Footer/Footer";
import "../../assets/css/Contact/Contact.css";
import { Container } from "react-bootstrap";

const Contact = (props) => {
  return (
    <div style={{ background: "black" }}>
      <Container fluid>
        <div className="Contact_Div">
          <h1 className="contact_write">Contact</h1>
          <p>For More information kindly contact us</p>

          <h6>
            Take cybersecurity test & audits, attack your own systems before
            hackers.
          </h6>

          <h6>
            If you were unable to find the answers you were looking for, we're
            happy <br />
            to answer any questions you may have. Send us a message in the form
            below
            <br /> and we will get back to you shortly.
          </h6>
        </div>

        <div className="contact-page">
          <h2 className="Get-touch">Get in touch</h2>
          <div className="contact-info">
            <div className="item">
              <i className="icon fas fa-home"></i>
              Indore, India
            </div>
            <div className="item">
              <i className="icon fas fa-phone"></i>
              +91 9399206406
            </div>
            <div className="item">
              <i className="icon fas fa-envelope"></i>
              support@e-hack.in
            </div>
            <div className="item">
              <i className="icon fas fa-clock"></i>
              Mon - Fri 10:00 AM to 8:00 PM
            </div>
          </div>
          <form action="" className="contact-form">
            <input type="text" className="textb" placeholder="Your Name" />
            <input type="email" className="textb" placeholder="Your Email" />
            <textarea placeholder="Your Message"></textarea>
            <input type="submit" className="send_btn" value="Send" />
          </form>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Contact;
