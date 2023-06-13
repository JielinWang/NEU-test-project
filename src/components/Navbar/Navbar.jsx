import React, { useState } from "react";
import {
  Nav,
  NavItem,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  NavLink,
} from "reactstrap";
import "./Navbar.css";

const Navigation = () => {
  const [capabilitiesOpen, setCapabilitiesOpen] = useState(false);
  const [flavorsOpen, setFlavorsOpen] = useState(false);

  const toggleCapabilities = () => setCapabilitiesOpen(!capabilitiesOpen);
  const toggleFlavors = () => setFlavorsOpen(!flavorsOpen);

  return (
    <>
      {/* Logo */}
      <div className="logo">
        <img
          src="../../img/logo.png"
          className="d-inline-block align-text-top"
          style={{
            height: 40,
            paddingBottom: 10,
          }}
          alt="logo"
        />
      </div>
      {/* Header */}
      <div>
        <Nav className="justify-content-center">
          {/* Capabilities */}
          <Dropdown
            nav
            inNavbar
            isOpen={capabilitiesOpen}
            toggle={toggleCapabilities}
          >
            <DropdownToggle nav caret>
              Capabilities
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Design</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Production</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Certification</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          {/*  Flavors */}
          <Dropdown nav inNavbar isOpen={flavorsOpen} toggle={toggleFlavors}>
            <DropdownToggle nav caret>
              Flavors
            </DropdownToggle>
            <DropdownMenu>
              {/* Dynamically generate flavor categories */}
              <DropdownItem>Flavor Category 1</DropdownItem>
              <DropdownItem>Flavor Category 2</DropdownItem>
              <DropdownItem>Flavor Category 3</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          {/* About */}
          <NavItem>
            <NavLink href="/about">About us</NavLink>
          </NavItem>
          {/* Contact */}
          <NavItem>
            <NavLink href="/contact">Contact us</NavLink>
          </NavItem>
        </Nav>
      </div>
      {/* Slider */}
    </>
  );
};

export default Navigation;
