import React from "react";

const Footer = ({ todos }) => (
  <div
    style={{ paddingLeft: "2rem" }}
  >{`Sovelluksessa ${todos.length} muistiinpanoa`}</div>
);

export default Footer;
