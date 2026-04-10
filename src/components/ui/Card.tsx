import React from "react";

type CardProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
};

const Card = ({ children, style = {}, className = "" }: CardProps) => (
  <div className={`card ${className}`} style={style}>
    {children}
  </div>
);

export default Card;