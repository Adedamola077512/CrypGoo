import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavigationBar.css";
import logo1 from "../assets/logo.svg"; // Adjust the path as necessary

function NavigationBar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      expand="lg"
      variant="light"
      sticky="top"
      className="py-3 scalloped"
      expanded={expanded}
    >
      <Container>
        {/* Brand Logo */}
        <Navbar.Brand >
          <Link to="/" onClick={() => setExpanded(false)}>
            <img src={logo1} alt="Logo" className="logo" />
          </Link>
        </Navbar.Brand>

        {/* Navbar Toggle */}
        <Navbar.Toggle
        className="toggle"
          aria-controls="navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />

        {/* Navbar Links and Button */}
        <Navbar.Collapse id="navbar-nav" className="justify-content-center">
          <Nav className="mx-auto text-center">
            {/* Navigation Links */}
            <a href="#Buy" className="home" onClick={() => setExpanded(false)}>
              Buy & Sell
            </a>
            <a
              href="#Development"
              className="home"
              id="line"
              onClick={() => setExpanded(false)}
            >
              Development
            </a>
            <a href="#Work" className="home" onClick={() => setExpanded(false)}>
              Work
            </a>
            <a
              href="#Portfoilo"
              className="home"
              onClick={() => setExpanded(false)}
            >
              Portfoillo
            </a>
            <a
              href="#Upgrade"
              className="home"
              onClick={() => setExpanded(false)}
            >
              Upgrade
            </a>
            <a href="#Doc" className="home" onClick={() => setExpanded(false)}>
              {/* Docs */}
            </a>
          </Nav>

          {/* Sign-Up Button */}
          <div className="btn-grid">
            <button className="signup mx-2" onClick={() => setExpanded(false)}>
              <Link
                to="/SignIn"
                className="textlink"
                onClick={() => setExpanded(false)}
              >
                Sign In
              </Link>
            </button>
            <button
              id="signup2"
              className=" mx-2"
              onClick={() => setExpanded(false)}
            >
              <Link
                to="/SignUp"
                className="text"
                onClick={() => setExpanded(false)}
              >
                Sign Up
              </Link>
            </button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
