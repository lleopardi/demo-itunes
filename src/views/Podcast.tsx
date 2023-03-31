import React from "react";
import {
  Link,
  useLoaderData,
  useLocation,
} from "react-router-dom";
import Card from "../components/Card";
import CardCover from "../components/CardCover";
import { Episode } from "../models/episode";
import "./Podcast.scss";

const Podcast = () => {
  // @ts-ignore
  const { episodes } = useLoaderData();
  const { state: podcast } = useLocation();

  return (
    <section className="podcast-layout">
      <div>
        <CardCover podcast={podcast}></CardCover>
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
