import React from "react";
import { Card, Container, CardColumns } from "react-bootstrap";
import Box from "@material-ui/core/Box";
import Mostpopular from "../../../assets/Api/Mostpopular.json";
import "../../../assets/css/Homepage/Homepage.css";

function MostpopularPost(props) {
  return (
    <>
      <Container fluid>
        <div className="Most-popular-post">
          <Box textAlign="center">
            <h1 style={{ color: "white", padding: "2%" }}>
              Most Popular Posts
            </h1>
            <br />
          </Box>

          <CardColumns>
            {Mostpopular.map((items) => (
              <div>
                <Card className="Most-popular-post-card">
                  <Card.Img variant="top" height="300" src={items.image} />
                  <Card.Body>
                    <Card.Title style={{ borderBottom: "2px solid green" }}>
                      {items.title}
                    </Card.Title>
                    <Card.Text>{items.descrption}</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">{items.date}</small>
                  </Card.Footer>
                </Card>
              </div>
            ))}
            <br />
          </CardColumns>
        </div>
      </Container>
    </>
  );
}

export default MostpopularPost;
