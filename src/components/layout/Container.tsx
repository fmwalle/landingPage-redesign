import React from "react";

type ContainerProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
};

const Container = ({ children, style = {} }: ContainerProps) => (
  <div className="container" style={style}>
    {children}
  </div>
);

export default Container;