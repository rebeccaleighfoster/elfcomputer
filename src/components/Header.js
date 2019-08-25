import React from "react";

const Header = props => (
  <>
    <h1>{props.title}</h1>
    <h3>{props.subtitle}</h3>
    <h5>{props.description}</h5>
  </>
)

export default Header;
