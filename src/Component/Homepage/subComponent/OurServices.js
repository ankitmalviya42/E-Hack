import React from "react";
import { CardColumns, Card, Container, Row, Col } from "react-bootstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import course from "../../../assets/Api/OurCourse.json";

function OurServices(props) {
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
                    <img src="https://picsum.photos/200/300" alt="not-found" />
                    <p className="legend">Legend 1</p>
                  </div>
                  <div>
                    <img src="https://picsum.photos/200/300" alt="not-found" />
                    <p className="legend">Legend 2</p>
                  </div>
                  <div>
                    <img src="https://picsum.photos/200/300" alt="not-found" />
                    <p className="legend">Legend 3</p>
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
                <h2>How can E-Hack secure your future?</h2>
              </div>
              <Container>
                <CardColumns>
                  {course.map((item, index) => (
                    <div>
                      <Card
                        style={{ width: "100%" }}
                        className="imagecard-container"
                      >
                        <Card.Img
                          variant="top"
                          alt="Avatar"
                          src={item.image}
                          className="image"
                        />
                        <Card.Text className="overlay">
                          <div className="text">
                            <b>{item.coursetext}</b>
                          </div>
                        </Card.Text>
                      </Card>
                    </div>
                  ))}
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
