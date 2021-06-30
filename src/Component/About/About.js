import React from "react";
import Footer from "../Footer/Footer";
import "../../assets/css/About/About.css";
import { Row, Col, Container } from "react-bootstrap";
// icon import

import { FaGraduationCap, FaCode } from "react-icons/fa";
import { GiWorld } from "react-icons/gi";

const About = (props) => {
  return (
    <div>
      <Container fluid>
        <section className="text-center about">
          <h1 className="about_aboutus">About US</h1>
          <div className="container">
            <div>
              <p className="about_text_content">
                E-Hack Technology Pvt. Ltd. is an all-around cybersecurity
                training company that delivers an extensive hands-on
                understanding of diverse cyber and information security domains.
                Focused to produce cybersecurity experts with 360-degree skills
                to combat security threats across the internet, cloud, and
                organizations. E-Hack Technology is an eminent security training
                provider dedicated to bridge the cybersecurity skill gap through
                implementation-centric learning programs designed by certified
                security experts.
              </p>
              <br />

              <p>"Cyber Security is not an Addon, it's a Culture" </p>
              <br />
              <p className="about_our_Highlights">Our Highlights </p>
              <p className="about_our_Highlights_below">
                Guiding you to the best, with the best
              </p>
              <br />
            </div>

            <div className="row">
              <div
                className="col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn"
                data-wow-offset="200"
              >
                <span className="fa fa-group">
                  <FaGraduationCap />
                </span>
                <h3 className="section_text">Practical Hands on experience</h3>
                <p className="lead">The home of tech savvies</p>
              </div>
              <div
                className="col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn"
                data-wow-offset="200"
              >
                <span className="fa fa-info">
                  <FaCode />
                </span>
                <h3 className="section_text">Ongoing Support using RT-FASTE</h3>
                <p className="lead">Skilled and secured to help you better</p>
              </div>
              <div className="clearfix visible-md-block visible-sm-block"></div>
              <div
                className="col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn"
                data-wow-offset="200"
              >
                <span className="fa fa-file">
                  <GiWorld />
                </span>
                <h3 className="section_text">
                  World-Class <br /> Infrastructure
                </h3>
                <p className="lead">Build from and for the best</p>
              </div>
            </div>
          </div>
          <Row>
            <Col sm={6}>
              <div className="About_Our_Vision">
                <h1>Our Vision</h1>
                <p>
                  To be the one and only choice for end-to-end cybersecurity
                  training among security aspirants and organizations and
                  contribute towards minimizing cyber threats and crimes.
                </p>
              </div>
            </Col>
            <Col sm={6}>
              <div className="About_Our_Mission">
                <h1>Our Mission</h1>
                <p>
                  To produce the most efficient cybersecurity workforce having
                  an ability to address simple to complex security concerns
                  effectively across the globe implementing futuristic tools,
                  technologies and best practices
                </p>
              </div>
            </Col>
          </Row>
        </section>
      </Container>
      <Footer />
    </div>
  );
};

export default About;
