import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        with: "100%",
        backgroundColor: "rgb(32, 109, 63)",
        position: "absolute",
        left: "0",
        bottom: "0",
        right: "0",
        height: "50px",
        color: "white",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        opacity: "0.7",
        fontSize: "0.8rem",
      }}
    >
      <footer>
        <span> Made by Carlos Barros</span>
      </footer>
    </div>
  );
};

export default Footer;
