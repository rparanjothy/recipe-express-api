import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

class AppNavBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="blue" light expand="md">
          <NavbarBrand href="/">Secret Recipes</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                {/* <NavLink href="http://localhost:5000/api/recipes"> */}
                <NavLink href="Fader">
                  View All Recipes
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Delete</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Update</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Add</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default AppNavBar;
