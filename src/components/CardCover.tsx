import React from "react";
import { useNavigate } from "react-router-dom";
import { Podcast } from "../models/podcast";
import Card from "./Card";
import "./CardCover.scss";

interface Props {
  podcast: Podcast;
}

const CardCover = ({ podcast }: Props) => {
  const navigation = useNavigate();
  const backAction = () => {
    navigation(-1);
  };
  return (
    <Card>
      <div className="card-cover">
        <div className="card-cover__container">
          <img
            onClick={backAction}
            className="card-cover__image"
            src={podcast.image}
            alt=""
          />
        </div>
        <div className="card-cover__info">
          <p className="card-cover__title" onClick={backAction}>
            {podcast.title}
          </p>
          <span className="card-cover__author">by: {podcast.author}</span>
        </div>
        <div className="card-cover__description">
          <p className="card-cover__description-title">Description:</p>
          <p className="card-cover__description-content">
            {podcast.description}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default CardCover;
