import React, { useState } from "react";
import {
  CardColumns,
  Card,
  Container,
  Row,
  Col,
  Button,
  Modal,
} from "react-bootstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CEH from "../../../assets/Images/ceh.jpg";
import Vapt from "../../../assets/Images/vapt.png";
import Bug from "../../../assets/Images/bugbounty.png";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

function OurServices(props) {
  const classes = useStyles();
  const [ceh, setCeh] = useState(false);
  const [vapt, setVapt] = useState(false);
  const [bbh, setBbh] = useState(false);

  return (
    <>
      <Container fluid>
        <div className="Our-services">
          <br />
          <h1 style={{ borderBottom: "2px solid green" }}> Our Services </h1>

          <br />
          <h4>
            WE HELP YOUR COMPANY CULTURE TO HAVE A SUCCESSFUL CYBERSECURITY
            STANCE.
          </h4>
        </div>
        <div className="Our-services-card">
          <Row>
            <Col sm={4}>
              <div className="Our-services-slider">
                <Carousel centerMode infiniteLoop>
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1613918514536-2071b86612c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fGhhY2tlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                      alt="not-found"
                    />
                    <p className="legend">Certified Ethical Hacker v11</p>
                  </div>
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1525373698358-041e3a460346?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aGFja2VyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                      alt="not-found"
                    />
                    <p className="legend">
                      Vulnerability Assessment Penetration Testing
                    </p>
                  </div>
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1597239451127-914cc6d50a1d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzN8fGhhY2tlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                      alt="not-found"
                    />
                    <p className="legend">Bug Bounty Hunter</p>
                  </div>
                </Carousel>
              </div>
            </Col>
            <Col sm={8} style={{ color: "white", padding: "3%" }}>
              <h1 className="Our-services-heading">E-HACK Technology</h1>

              <br />
              <p className="Our-services-paragraph-tag">
                E-HACK Technology provides services in many areas related to
                cybersecurity, especially cybersecurity training consultancy.
                E-HACK Technology has uniquely positioned itself to help to
                solve the cyber skills gap in the industry.
              </p>

              <h1 className="Our-services-heading">
                <br />
                OUR STORY
              </h1>
              <br />

              <p className="Our-services-paragraph-tag">
                The number of places where you can learn practical cybersecurity
                is fairly limited. Most courses and certifications don't focus
                on the practical aspects of hacking. We wanted to change that.
                So we started E-HACK Technology your one place to all the
                hacking news and guides you want.
              </p>
            </Col>
          </Row>
          <br />
        </div>

        <Container fluid>
          <Row>
            <Col sm={12} style={{ backgroundColor: "black" }}>
              <div className="our-course-Heading">
                <div id="courses">
                  <h2>Courses</h2>
                </div>
              </div>
              <Container>
                <CardColumns>
                  <div>
                    <Card
                      style={{ width: "100%" }}
                      className="imagecard-container"
                    >
                      <Card.Img
                        variant="top"
                        alt="Avatar"
                        src={CEH}
                        className="image"
                      />
                      <Card.Text className="overlay">
                        <div className="text">
                          <b>Certified Ethical Hacker v11</b>
                          <br />
                          <br />
                          <br />

                          <Button
                            variant="primary"
                            onClick={() => setCeh(true)}
                          >
                            Course Detail
                          </Button>

                          <Modal
                            show={ceh}
                            onHide={() => setCeh(false)}
                            dialogClassName="modal-90w"
                            aria-labelledby="example-custom-modal-styling-title"
                          >
                            <Modal.Header closeButton>
                              <Modal.Title id="example-custom-modal-styling-title">
                                Certified Ethical Hacker v11
                              </Modal.Title>
                            </Modal.Header>
                            <Modal.Body className="model_vapt">
                              <ul style={{ textDecoration: "none" }}>
                                <li>
                                  <b>Module 01 </b>: Introduction to Ethical
                                  Hacking
                                </li>
                                <li>
                                  <b>Module 02 </b>: Footprinting and
                                  Reconnaissance
                                </li>
                                <li>
                                  <b>Module 03 </b>: Scanning Networks
                                </li>
                                <li>
                                  <b>Module 04 </b>: Enumeration
                                </li>
                                <li>
                                  <b>Module 05 </b>: System Hacking
                                </li>
                                <li>
                                  <b>Module 06 </b>: Sniffing
                                </li>
                                <li>
                                  <b>Module 07 </b>: Social Engineering
                                </li>
                                <li>
                                  <b>Module 08 </b>: Denial-of-Service
                                </li>
                                <li>
                                  <b>Module 09 </b>: Session Hijacking
                                </li>
                                <li>
                                  <b>Module 10 </b>: Hacking Web Servers
                                </li>
                                <li>
                                  <b>Module 11 </b>: Hacking Web Applications
                                </li>
                                <li>
                                  <b>Module 12 </b>: SQL Injection
                                </li>
                                <li>
                                  <b>Module 13 </b>: Hacking Wireless Networks
                                </li>
                                <li>
                                  <b>Module 14 </b>: Cryptography
                                </li>
                              </ul>
                            </Modal.Body>
                          </Modal>
                        </div>
                      </Card.Text>
                    </Card>
                    {/* second card  */}
                    <Card
                      style={{ width: "100%" }}
                      className="imagecard-container"
                    >
                      <Card.Img
                        variant="top"
                        alt="Avatar"
                        src={Vapt}
                        className="image"
                      />
                      <Card.Text className="overlay">
                        <div className="text">
                          <b>Vulnerability Assessment Penetration Testing</b>
                          <br />
                          <br />
                          <br />

                          <Button
                            variant="primary"
                            onClick={() => setVapt(true)}
                          >
                            Course Detail
                          </Button>

                          <Modal
                            show={vapt}
                            onHide={() => setVapt(false)}
                            dialogClassName="modal-90w"
                            aria-labelledby="example-custom-modal-styling-title"
                          >
                            <Modal.Header closeButton>
                              <Modal.Title id="example-custom-modal-styling-title">
                                Vulnerability Assessment Penetration Testing
                              </Modal.Title>
                            </Modal.Header>
                            <Modal.Body className="model_vapt">
                              <div className={classes.root}>
                                <Accordion>
                                  <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                  >
                                    <Typography className={classes.heading}>
                                      Web Application Penetration Testing
                                    </Typography>
                                  </AccordionSummary>
                                  <AccordionDetails>
                                    <Typography>
                                      <ul>
                                        <li> Introduction </li>
                                        <li> Installing Lab </li>
                                        <li> Enumeration </li>
                                        <li> Vulnerability Scanning </li>
                                        <li>
                                          Introduction to
                                          burpsuite,Authentication bypass using
                                          burpsuite
                                        </li>
                                        <li>
                                          Html injection, Introduction about
                                          cookie
                                        </li>
                                        <li> XSS (reflected, stored, DOM) </li>
                                        <li> XSS Advance </li>
                                        <li>
                                          Introduction to BeeF and browser
                                          Hijack
                                        </li>
                                        <li>
                                          Cookie stealing and session Hijack
                                        </li>
                                        <li> Broken Access Control </li>
                                        <li>
                                          Broken session and security
                                          misconfiguration
                                        </li>
                                        <li>
                                          Using Components with Known
                                          Vulnerabilitie
                                        </li>
                                        <li> Uploading web shell </li>
                                        <li>
                                          Uploading web shell filter bypass
                                          Evaluation
                                        </li>
                                        <li>
                                          Path traversal, LFI and RFI basic
                                        </li>
                                        <li> LFI RFI advance </li>
                                        <li> Lab solving </li>
                                      </ul>
                                    </Typography>
                                  </AccordionDetails>
                                </Accordion>
                                <br />
                                {/* second accordion */}

                                <Accordion>
                                  <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                  >
                                    <Typography className={classes.heading}>
                                      Network Penetration Testing
                                    </Typography>
                                  </AccordionSummary>
                                  <AccordionDetails>
                                    <Typography>
                                      <ul>
                                        <li> Introduction </li>
                                        <li> Legal Considerations </li>
                                        <li> Setting up Your Environment </li>
                                        <li> Passive Information Gathering </li>
                                        <li> Active Information Gathering </li>
                                        <li> Exploitation </li>
                                        <li>
                                          Phishing - What is Phishing and Tools
                                          Used for Phishing
                                        </li>
                                        <li> Post Exploitation </li>
                                        <li> Other Techniques </li>
                                      </ul>
                                    </Typography>
                                  </AccordionDetails>
                                </Accordion>
                                <br />

                                {/*  thrid accordion */}

                                <Accordion>
                                  <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                  >
                                    <Typography className={classes.heading}>
                                      Mobile Application Hacking and Penetration
                                      Testing
                                    </Typography>
                                  </AccordionSummary>
                                  <AccordionDetails>
                                    <Typography>
                                      <ul>
                                        <li> Introduction To Mobile Apps. </li>
                                        <li> Mobile Application Security. </li>
                                        <li>
                                          Mobile Application Penetration
                                          Testing.
                                        </li>
                                        <li>
                                          The most common areas where we find
                                          mobile application data resides.
                                        </li>
                                        <li> The Architecture of Android. </li>
                                        <li>
                                          The App Sandbox and the Permission
                                          Model.
                                        </li>
                                        <li> AndroidManifest.xml File. </li>
                                        <li> Android Compilation Process. </li>
                                        <li> The Android Startup Process. </li>
                                        <li>Android Application Components.</li>
                                        <li> Set up a testing environment. </li>
                                        <li> Android Debug Bridge (ADB). </li>
                                        <li>
                                          Digging deeper into Android (ADB
                                          tool).
                                        </li>
                                        <li>
                                          intercept and analyze the network
                                          traffic.
                                        </li>
                                        <li>
                                          Reversing an Android application.
                                        </li>
                                        <li>
                                          OWASP top 10 vulnerabilities for
                                          mobiles.
                                        </li>
                                        <li>
                                          Install DIVA (Damn insecure and
                                          vulnerable App).
                                        </li>
                                        <li> Insecure Logging Issue. </li>
                                        <li> Insecure Data Storage. </li>
                                        <li> Database Insecure Storage. </li>
                                        <li>
                                          Insecure Data Storage Inside Temporary
                                          Files.
                                        </li>
                                        <li> Hardcoding Issues. </li>
                                        <li>
                                          Input Validation Issues – SQL
                                          Injection.
                                        </li>
                                        <li>
                                          Input Validation Issues – Exploiting
                                          Webview Vulnerability.
                                        </li>
                                      </ul>
                                    </Typography>
                                  </AccordionDetails>
                                </Accordion>
                              </div>
                            </Modal.Body>
                          </Modal>
                        </div>
                      </Card.Text>
                    </Card>
                    {/* Third Card */}
                    <Card
                      style={{ width: "100%" }}
                      className="imagecard-container"
                    >
                      <Card.Img
                        variant="top"
                        alt="Avatar"
                        src={Bug}
                        className="image"
                      />
                      <Card.Text className="overlay">
                        <div className="text">
                          <b>Bug Bounty Hunter</b>
                          <br />
                          <br />
                          <br />

                          <Button
                            variant="primary"
                            onClick={() => setBbh(true)}
                          >
                            Course Detail
                          </Button>

                          <Modal
                            show={bbh}
                            onHide={() => setBbh(false)}
                            dialogClassName="modal-90w"
                            aria-labelledby="example-custom-modal-styling-title"
                          >
                            <Modal.Header closeButton>
                              <Modal.Title id="example-custom-modal-styling-title">
                                Bug Bounty Hunter
                              </Modal.Title>
                            </Modal.Header>
                            <Modal.Body className="model_vapt">
                              <ul>
                                <li>
                                  <b>Module 01 </b>: Intro to Bug Hunting
                                </li>
                                <li>
                                  <b>Module 02 </b>: HTTP Basics
                                </li>
                                <li>
                                  <b>Module 03 </b>: Open Redirect
                                </li>

                                <li>
                                  <b>Module 04 </b>: Cross-Site Scripting (XSS)
                                </li>

                                <li>
                                  <b>Module 05 </b>: Cross-Site Request Forgery
                                  (CSRF)
                                </li>

                                <li>
                                  <b>Module 06 </b>: Insecure Direct Object
                                  Reference (IDOR)
                                </li>
                                <li>
                                  <b>Module 07 </b>: Local File Disclosure (LFD)
                                </li>

                                <li>
                                  <b>Module 08 </b>: SQL Injection
                                </li>
                                <li>
                                  <b>Module 09 </b>: Server Side Request Forgery
                                  (SSRF)
                                </li>

                                <li>
                                  <b>Module 10 </b>: XML External Entity (XXE)
                                </li>

                                <li>
                                  <b>Module 11 </b>: Remote Command Execution
                                  (RCE)
                                </li>

                                <li>
                                  <b>Module 12 </b>: Testing File Uploaders
                                </li>

                                <li>
                                  <b>Module 13 </b>: Recon
                                </li>

                                <li>
                                  <b>Module 14 </b>: How to Setup Your Lab
                                  (Installing and Demos)
                                </li>

                                <li>
                                  <b>Module 15 </b>: Hands On Hacking
                                </li>
                                <li>
                                  <b>Module 16 </b>: Next Steps & Outro
                                </li>
                                <li>
                                  <b>Module 17 </b>: Resources
                                </li>
                              </ul>
                            </Modal.Body>
                          </Modal>
                        </div>
                      </Card.Text>
                    </Card>
                    <br /> <br /> <br /> <br />
                  </div>
                </CardColumns>
              </Container>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default OurServices;
