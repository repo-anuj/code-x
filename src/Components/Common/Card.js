// Card.js
import React from "react";
import "../../assets/scss/components/card.scss";

export const Card = ({ children, className }) => {
  return <div className={`card ${className || ""}`}>{children}</div>;
};
