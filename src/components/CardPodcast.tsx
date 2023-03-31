import React from "react";
import "./CardPodcast.scss";
import { Podcast } from "../models/podcast";
interface Props {
  podcast: Podcast;
}

const CardPodcast = ({ podcast }: Props) => {
  return (
    <div className="card-podcast">
      <div className="card-podcast__image-container">
        <img
          src={podcast.image}
          alt="Cover Image"
          className="card-podcast__image"
        />
      </div>
      <div className="card-podcast__title" title={podcast.title}>
        {podcast.shortTitle} 
      </div>
      <div className="card-podcast__author">Author: {podcast.author}</div>
    </div>
  );
};

export default CardPodcast;
