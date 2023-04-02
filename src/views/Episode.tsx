import "./Episode.scss";

import Card from "../components/Card";
import CardCover from "../components/CardCover";
import React from "react";
import { useLocation } from "react-router-dom";

const Episode = () => {
  const { state } = useLocation();
  const { episode, podcast } = state;

  const htmlDescription = episode.description.replace(
    /(https?:\/\/[^\s]+)/g,
    '<a href="$1">$1</a>'
  );  

  return (
    <section className="episode-layout">
      <div>
        <CardCover podcast={podcast}></CardCover>
      </div>
      <div className="">
        <Card>
          <div className="card-episode">
            <span>
              <h2>{episode.title}</h2>
              <div
                className="card-episode__description"
                dangerouslySetInnerHTML={{ __html: htmlDescription }}
              ></div>
            </span>

            <audio controls className="card-episode__play">
              <source src={episode.episodeUrl} type="audio/mp3" />
            </audio>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Episode;
