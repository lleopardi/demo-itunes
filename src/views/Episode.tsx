import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Card from "../components/Card";
import CardCover from "../components/CardCover";
import "./Episode.scss";

const Episode = () => {
  const { state } = useLocation();
  const { episode, podcast } = state;
  const navigation = useNavigate();

  const htmlDescription = episode.description.replace(
    /(https?:\/\/[^\s]+)/g,
    '<a href="$1">$1</a>'
  );

  const backAction = () => {
    navigation(-1);
  };

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
