import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
  const [flavorCategories, setFlavorCategories] = useState([]);

  const toggleCapabilities = () => setCapabilitiesOpen(!capabilitiesOpen);
  const toggleFlavors = () => setFlavorsOpen(!flavorsOpen);

  useEffect(() => {
    // Fetch flavor categories from flavors.json file
    fetch("/flavors.json")
      .then((response) => response.json())
      .then((data) => {
        const categories = [...new Set(data.map((flavor) => flavor[1]))];
        setFlavorCategories(categories);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      {/* Logo */}
      <div className="logo">
        <Link to="/">
          <img
            src="../../img/logo.png"
            className="d-inline-block align-text-top"
            style={{
              height: 40,
              paddingBottom: 10,
            }}
            alt="logo"
          />
        </Link>
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
          {/* Flavors */}
          <Dropdown nav inNavbar isOpen={flavorsOpen} toggle={toggleFlavors}>
            <DropdownToggle nav caret>
              Flavors
            </DropdownToggle>
            <DropdownMenu>
              {/* Dynamically generate flavor categories */}
              {flavorCategories.map((category) => {
                const categorySlug = category.toLowerCase().replace(/\s/g, "-");
                return (
                  <DropdownItem key={category}>
                    <NavLink href={`/flavors/${categorySlug}`}>
                      {category}
                    </NavLink>
                  </DropdownItem>
                );
              })}
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
    </>
  );
};

export default Navigation;
