import React from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const Error404 = () => {
  return (
    <div>
      <Logo />
      <Navigation />
      <p>La page demandée n'existe pas...</p>
    </div>
  );
};

export default Error404;
