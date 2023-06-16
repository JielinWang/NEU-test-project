import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <footer className="py-2 bg-secondary fixed-bottom">
        <div className="container d-flex justify-content-between align-items-center">
          <p style={{ margin: 0 }}>
            Copyright&copy; {new Date().getFullYear()} All rights reserved
          </p>
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
      </footer>
      {/* Add an empty div with some padding to create space */}
      <div style={{ paddingBottom: "60px" }}></div>
    </div>
  );
};

export default Footer;
