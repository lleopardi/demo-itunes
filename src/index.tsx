import "./index.scss";

import React, { StrictMode } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import App from "./views/App";
import Episode from "./views/Episode";
import Home from "./views/Home";
import Podcast from "./views/Podcast";
import { createRoot } from "react-dom/client";
import getEpisodesByPodcastId from "./services/episodes.service";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />}></Route>
      <Route path="podcast/:id" element={<Podcast />} loader={getEpisodesByPodcastId}></Route>
      <Route path="podcast/:id/episode/:episodeId" element={<Episode />}></Route>
    </Route>
  )
);

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
