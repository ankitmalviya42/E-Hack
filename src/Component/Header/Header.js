import React from "react";
import logo from "../../assets/Images/logo.jpg";
import { Nav, Navbar } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Component import

import Home from "../Homepage/Home";
import OnlineCourses from "../OnlineCourses/OnlineCourses";
import Consultancy from "../Consultancy/Consultancy";
import Trainings from "../Trainings/Trainings";
import About from "../About/About";
import Career from "../Career/Career";
import Contact from "../Contact/Contact";

function Header(props) {
  return (
    <div>
      <Router>
        <Navbar style={{ backgroundColor: "#26452E" }} expand="lg">
          <Link to="/">
            <Navbar.Brand>
              <img src={logo} alt="not found" width="50" height="45" />
              <span style={{ marginLeft: "10%" }}>
                <b style={{ color: "white" }}>E-Hack Corp</b>
              </span>
            </Navbar.Brand>
          </Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link style={{ textDecoration: "none", Color: "white" }}>
                <Link to="/">Home</Link>
              </Nav.Link>

              <Nav.Link>
                <Link to="/OnlineCourses">OnlineCourses</Link>
              </Nav.Link>

              <Nav.Link>
                <Link to="/Consultancy">Consultancy</Link>
              </Nav.Link>

              <Nav.Link>
                <Link to="/Trainings">Trainings</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/About">About</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/Career">Career</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/Contact">Contact</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        {/* Switch Code initialize */}

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Onlinecourses">
            <OnlineCourses />
          </Route>
          <Route path="/Consultancy">
            <Consultancy />
          </Route>
          <Route path="/Trainings">
            <Trainings />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Career">
            <Career />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Header;
