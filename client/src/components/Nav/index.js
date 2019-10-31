import React, { Component } from "react";

import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";

class Navigation extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand as={Link} to="/">
            Google Book Search
          </Navbar.Brand>
          <Navbar.Collapse>
            <Nav className="mr-auto">
              <NavItem eventkey={1} href="/">
                <Nav.Link as={Link} to="/">
                  Search
                </Nav.Link>
              </NavItem>
              <NavItem eventkey={1} href="/saved">
                <Nav.Link as={Link} to="/saved">
                  Saved
                </Nav.Link>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
