import React from "react";
import "./Card.scss";

interface CardTypes {
  customClassName?: string;
  attributes?: any;
  children: React.ReactNode;
}
const Card: React.FC<CardTypes> = ({
  customClassName = "",
  attributes,
  children,
}) => {
  return (
    <div className={`card ${customClassName}`} {...attributes}>
      {children}
    </div>
  );
};

export default Card;
