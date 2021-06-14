import { Box } from "@material-ui/core";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Imagegallery() {
  return (
    <div>
      <Container fluid>
        <div className="main-container-div">
          <Row>
            <Col sm={6}>
              <div className="image-gallery-div">
                <Box textAlign="center">
                  <h1 className="text-color-image-gallery">
                    E-Hack Technology
                  </h1>
                </Box>
                <p className="text-color-image-gallery paragraph-text-size">
                  In addition to cybersecurity training, E-Hack Technology helps
                  organizations understand their cybersecurity needs and provide
                  investment in the correct areas of cybersecurity. Web and
                  Mobile Application Security, Penetration Test, Incident
                  Response, Malware Analysis, PCI and ISO 27001 compliance,
                  Secure Software Development, Threat Intelligence, and
                  Vulnerability Management are a few examples of E-Hack
                  Technology services. E-Hack Technology also has
                  state-of-the-art CyberLabs, where companies can simulate
                  real-life Cyber-attacks on their infrastructure, helping them
                  to prevent & combat breaches without risking their own
                  network.
                </p>

                <br />
                <div className="consultancy-img-right-column">
                  <img
                    src="https://picsum.photos/200/300"
                    alt="not found"
                    className="Image-gallery-img-tag"
                  />
                </div>

                <br />

                <div className="course-name-heading">
                  <h1>Training</h1>
                </div>

                <div className="consultancy-img-right-column">
                  <img
                    src="https://picsum.photos/200/300"
                    alt="not found"
                    className="Image-gallery-img-tag"
                  />
                </div>

                <br />

                <div className="course-name-heading">
                  <h1>Online-Courses</h1>
                </div>
              </div>
            </Col>
            <Col sm={6}>
              <Container>
                <div className="right-colunm">
                  <div className="consultancy-img-right-column">
                    <img
                      src="https://picsum.photos/200/300"
                      alt="not found"
                      className="Image-gallery-img-tag"
                    />
                  </div>
                  <br />
                  <div className="course-name-heading">
                    <h1>Consultancy</h1>
                  </div>
                  <br /> <br />
                  <br />
                  <div className="consultancy-img-right-column">
                    <img
                      src="https://picsum.photos/200/300"
                      alt="not found"
                      className="Image-gallery-img-tag"
                    />
                  </div>
                  <br />
                  <div className="course-name-heading">
                    <h1>Career Consultancy</h1>
                  </div>
                </div>
              </Container>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
export default Imagegallery;
