import React, { ReactNode } from "react";
import "./Card.scss";

interface Props {
  children: ReactNode;
}

const Card = ({ children }: Props) => {
  return <div className="card">{children}</div>;
};

export default Card;
