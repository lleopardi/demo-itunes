import React, { useEffect, useState } from "react";
import "./Home.scss";
import CardPodcast from "../components/CardPodcast";
import { Podcast } from "../models/podcast";
import getPodcasts from "../services/podcast.service";

const Home = () => {
  const [podcasts, setPodcasts] = useState<Podcast[]>([]);
  const [filter, setFilter] = useState<string>("");

  useEffect(() => {
    getPodcasts().then((data) => {
      setPodcasts(data);
    });
  }, []);

  const filtered = podcasts.filter((item) => {
    const { title, author } = item;
    const toFind = filter.toUpperCase();
    const hasTitle = title.toUpperCase().includes(toFind);
    const hasAuthor = author.toUpperCase().includes(toFind);
    return hasTitle || hasAuthor;
  });

  return (
    <>
      <div className="filter">
        <span className="filter__counter">{filtered.length}</span>
        <label htmlFor="filter">
          <input
            name="filter"
            value={filter}
            type="text"
            placeholder="Filter Podcast..."
            onChange={(event) => setFilter(event.target.value)}
            autoComplete="off"
            className="filter__input"
          />
        </label>
      </div>
      <div className="podcast-list">
        {filtered.map((podcast, index) => {
          return (
          // <Link to={`podcast/${podcast.id}`} state={podcast}>
            <CardPodcast podcast={podcast} key={index}></CardPodcast>
          // </Link>
          );
        })}
      </div>
    </>
  );
};

export default Home;
