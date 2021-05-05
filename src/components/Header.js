import React from "react";

const headerStyles = {
  background: "#272727",
  border: "1px solid #1E1E1E",
  padding: "0 .5rem .5rem .5rem",
};

const Header = ({ text }) => {
  const getDate = () => {
    const date = new Date();
    return date.toLocaleDateString();
  };

  return (
    <div style={headerStyles}>
      <h1>{text}</h1>
      <div>{getDate()}</div>
    </div>
  );
};

export default Header;
