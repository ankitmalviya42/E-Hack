import React from "react";
import { Container, Row, Col, Card, CardDeck } from "react-bootstrap";
import Footer from "../Footer/Footer";
import "../../assets/css/Training/Training.css";

const Trainings = (props) => {
  return (
    <div className="main_div">
      <Container fluid>
        <div>
          <section className="training_vapt_heading">
            <h1>VAPT (Vulnerability Assessment Penetration Testing) Course</h1>
          </section>
          <p className="training_vapt_heading">
            VAPT Course in cyber security. there are two concepts in
            Vulnerability Assessment penetration testing ,first one is
            VA(vulnerability assessment) <br />
            and second is PT(Penetration Testing )The tests have different
            strengths and are often combined to achieve a more complete
            vulnerability analysis.
            <br />
            <br />
            vulnerability testing. Penetration tests attempt to exploit the
            vulnerabilities in a system to determine whether unauthorized access
            or other malicious <br /> activity is possible and identify which
            flaws pose a threat to the application.
          </p>
        </div>

        <div>
          <Row>
            <Col sm={6}>
              <div className="training_image_column1">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS37gd-iRyzlxf2iRcU6_CsMONwLBFtotQKLGi2dzuqwrfZyIucjqjH-28pBaIVvTv0h3M&usqp=CAU"
                  alt="not found"
                />
              </div>
            </Col>

            <Col sm={6}>
              <div className="Training_solution">
                <h1>Solution We Provide-</h1>
                <ul>
                  <li className="Training_solution_li">Network VAPT</li>
                  <li className="Training_solution_li">Web VAPT</li>
                  <li className="Training_solution_li">Mobile VAPT</li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
        <div className="Training_Card">
          <CardDeck>
            <Card
              style={{
                backgroundColor: "black",
                border: "2px solid white",
                borderRadius: "25px",
              }}
            >
              <Card.Header>
                <h5>Network Vulnerability Assessment Penetration Testing</h5>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  E-Hack also provide services for Network-Vulnerability
                  Assessment and Penetration Testing A vulnerability assessment
                  is a practice used to identify all potential vulnerabilities
                  that could be exploited in an environment. Our purpose of the
                  engagement was to utilize exploitation techniques in order to
                  identify and validate potential vulnerabilities across all
                  systems within scope.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              style={{
                backgroundColor: "black",
                border: "2px solid white",
                borderRadius: "25px",
              }}
            >
              <Card.Header>
                <h5>MOBILE Vulnerability Assessment Penetration Testing-</h5>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  E-Hack also provides services for MOBILE APPLICATION
                  -VULNERABILITY ASSESSMENT AND PENETRATION TESTING SERVICES to
                  different organisation. great quality and satisfaction is the
                  ultimate goal of E-Hack. vulnerability assessment’s goal is to
                  identify all vulnerabilities in an environment, a penetration
                  test has the goal of “breaking into the network.”
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              style={{
                backgroundColor: "black",
                border: "2px solid white",
                borderRadius: "25px",
              }}
            >
              <Card.Header>
                <h5>Web Vulnerability Assessment Penetration Testing-</h5>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  E-Hack provide web vapt(vulnerability assessment penetration
                  testing) Services… web vapt testing is deal with security that
                  specifically with security of websites, web applications and
                  web services. Web application security draws on the principles
                  of application security but applies them specifically to
                  Internet and Web systems.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Trainings;
