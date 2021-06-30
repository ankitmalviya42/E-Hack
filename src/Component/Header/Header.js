import React from "react";
import logo from "../../assets/Images/logo.png";
import { Nav, Navbar } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../../assets/css/Header/Header.css";

// Component import

import Home from "../Homepage/Home";
import OnlineCourses from "../OnlineCourses/OnlineCourses";
import Trainings from "../Trainings/Trainings";
import About from "../About/About";
import Contact from "../Contact/Contact";

function Header(props) {
  return (
    <div>
      <Router>
        <Navbar style={{ backgroundColor: "#26452E" }} expand="lg">
          <Link to="/">
            <Navbar.Brand>
              <img src={logo} alt="not found" />
            </Navbar.Brand>
          </Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link>
                <Link to="/" className="Navbar_Link">
                  Home
                </Link>
              </Nav.Link>

              <Nav.Link href="/#courses">
                <a href="/#courses" className="Navbar_Link">
                  Courses
                </a>
              </Nav.Link>

              <Nav.Link>
                <Link to="/OnlineCourses" className="Navbar_Link">
                  OnlineCourses
                </Link>
              </Nav.Link>

              <Nav.Link>
                <Link to="/Trainings" className="Navbar_Link">
                  Trainings
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/About" className="Navbar_Link">
                  About
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/Contact" className="Navbar_Link">
                  Contact
                </Link>
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

          <Route path="/Trainings">
            <Trainings />
          </Route>
          <Route path="/About">
            <About />
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
