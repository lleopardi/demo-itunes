import React from "react";
import {
  Link,
  useLoaderData,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Card from "../components/Card";
import { Episode } from "../models/episode";
import "./Podcast.scss";

const Podcast = () => {
  // @ts-ignore
  const { episodes } = useLoaderData();
  const navigation = useNavigate();
  const { state: podcast } = useLocation();

  const backAction = () => {
    navigation(-1);
  };

  return (
    <section className="podcast-layout">
      <div>
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
      </div>
      <div className="">
        <Card>
          <span className="episodes">Episodes: {episodes.length}</span>
        </Card>
        <div className="list-episodes">
          <Card>
            <table className="table">
              <thead className="table__head">
                <tr>
                  <th>Title</th>
                  <th>Date</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody className="table__body">
                {episodes.map((episode: Episode) => (
                  <tr>
                    <td>
                      <Link
                        to={`episode/${episode.id}`}
                        state={{ episode, podcast }}
                      >
                        {episode.title}
                      </Link>
                    </td>
                    <td>{episode.date}</td>
                    <td>{episode.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Podcast;
