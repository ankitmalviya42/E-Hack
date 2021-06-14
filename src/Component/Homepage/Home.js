import React from "react";
import EHack from "../../assets/Images/ehack.jpg";
import { Image, Jumbotron, Container, Col, Row } from "react-bootstrap";
import MostpopularPost from "./subComponent/MostpopularPost";
import OurServices from "./subComponent/OurServices";
import Footer from "../Footer/Footer";
import "../../assets/css/Homepage/Homepage.css";
import Imagegallery from "./subComponent/Imagegallery";

function Home() {
  return (
    <div className="Home-div">
      <div>
        <Image src={EHack} fluid />
      </div>
      <br />
      <br />
      <br />

      <Container fluid>
        <Row>
          {/* First column */}
          <Col sm="6">
            <Jumbotron
              fluid
              style={{
                backgroundColor: "black",
                color: "white",
                padding: "4%",
                borderRadius: "20px",
              }}
            >
              <h1>Learn Security & Ethical Hacking</h1>
              <br />
              <h1 style={{ borderBottom: "2px solid green" }}> </h1>
              <br />
              <p>
                All the material in one spot that you need to become an ethical
                hacker and security expert. No more outdated materials from
                ancient torrents sitting untouched on a drive somewhere. We
                provide the best training available, coupled with the coaching
                and support you need to actually learn.
              </p>
            </Jumbotron>
          </Col>

          {/* second column */}
          <Col sm="6">
            <Jumbotron
              fluid
              style={{
                backgroundColor: "black",
                color: "white",
                padding: "4%",
                borderRadius: "20px",
              }}
            >
              <h1>Free Courses</h1>
              <br />

              <h1 style={{ borderBottom: "2px solid green" }}> </h1>
              <p>
                <i>
                  <br />
                  Want to experience what makes E-Hack Technology different?
                </i>
                <br />
                Enroll in our free foundations course starting with to see just
                how powerful our methods are, and get the skills you need
                faster. <br />
                This opens up our other free courses.
              </p>
            </Jumbotron>
          </Col>
        </Row>
      </Container>

      <OurServices />
      <MostpopularPost />
      <Imagegallery />
      <Footer />
    </div>
  );
}

export default Home;
