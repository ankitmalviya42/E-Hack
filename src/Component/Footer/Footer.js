import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../assets/css/Footer/footer.css";

//import icons

import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import RedditIcon from "@material-ui/icons/Reddit";
import YouTubeIcon from "@material-ui/icons/YouTube";
function Footer(props) {
  return (
    <div>
      <Container fluid>
        <div className="main-div-footer">
          <Row>
            <Col sm={4}>
              <div className="first-column-div">
                <h1> E-Hack Technology</h1>
                <br />

                <p className="footer-paragraph">
                  E-Hack Technology provides services in many areas related to
                  cyber security, especially cybersecurity training consultancy.
                  E-Hack Technology has uniquely positioned itself to help to
                  solve the cyber skills gap in the industry.{" "}
                  <a style={{ textDecoration: "none" }} href="#home">
                    Read More
                  </a>
                </p>

                <br />
                <br />
                <br />

                <h2
                  style={{
                    borderBottom: "0.5px solid white",
                  }}
                >
                  <b>Follow Us !</b>
                </h2>
                <br />
                <div className="footer-icon-div">
                  <InstagramIcon
                    className="footer-icon"
                    style={{ fontSize: "35px" }}
                  />
                  <FacebookIcon
                    className="footer-icon"
                    style={{ fontSize: "35px" }}
                  />
                  <TwitterIcon
                    className="footer-icon"
                    style={{ fontSize: "35px" }}
                  />
                  <LinkedInIcon
                    className="footer-icon"
                    style={{ fontSize: "35px" }}
                  />
                  <RedditIcon
                    className="footer-icon"
                    style={{ fontSize: "35px" }}
                  />
                  <YouTubeIcon
                    className="footer-icon"
                    style={{ fontSize: "35px" }}
                  />
                </div>
              </div>
            </Col>

            <Col sm={4} className="Second_Col_Footer">
              <div className="Second_Column_heading">
                <h4>Useful Link</h4>
              </div>

              <Row>
                <Col sm={6}>
                  <div className="useful-link-list-footer">
                    <ul>
                      <li className="footer_unorder_list">Home</li>
                      <li className="footer_unorder_list">About</li>
                      <li className="footer_unorder_list">Training</li>
                      <li className="footer_unorder_list">Contact</li>
                    </ul>
                  </div>
                </Col>

                <Col sm={6}>
                  <div className="useful-link-list-footer">
                    <ul>
                      <li className="footer_unorder_list">Home</li>
                      <li className="footer_unorder_list">About</li>
                      <li className="footer_unorder_list">Training</li>
                      <li className="footer_unorder_list">Contact</li>
                    </ul>
                  </div>
                </Col>
              </Row>

              <Col sm={12}>
                <div className="Contact_footer_col_2">
                  <div className="Contactus_heading">
                    <br />
                    <h3>Contact Us</h3>
                  </div>
                  <div>
                    <br />
                    <p>33 Cavendish, London W1G 0PW, UK </p>
                    <p>infohackeracademy.uk</p>
                    <p>+44 20 8144 0201</p>
                  </div>
                </div>
              </Col>
            </Col>
            <Col sm={4} className="Third_Column">
              <div className="Third_Column_First_Content">
                <h3>From The Recent Blog</h3>

                <ul>
                  <li className="footer_unorder_list">
                    3 TIPS TO BE SECURE ONLINE!
                  </li>
                  <li className="footer_unorder_list">
                    A FEW MAJOR CAUSES OF DATA BREACH!
                  </li>
                  <li className="footer_unorder_list">
                    ANALYZING SECURITY POSTURE OF ORGANIZATION
                  </li>
                  <li className="footer_unorder_list">
                    Android Spyware Spies On Whatsapp, Skype Calls
                  </li>
                </ul>
              </div>

              {/* Support  section*/}

              <div className="Third_Column_support_section">
                <h3>Support</h3>
                <ul>
                  <li className="footer_unorder_list">Disclaimer </li>
                  <li className="footer_unorder_list">Advertise With Us</li>
                  <li className="footer_unorder_list"> FAQs</li>
                </ul>
              </div>
            </Col>
          </Row>

          <div className="footer_reserved">
            <p>All rights reserved 2021 © E-Hack Technology </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
