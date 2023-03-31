import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./views/App";
import "./index.css";
import Home from "./views/Home";
import Podcast from "./views/Podcast";
import getEpisodesByPodcastId from "./services/episodes.service";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />}></Route>
      <Route path="podcast/:id" element={<Podcast />} loader={getEpisodesByPodcastId}></Route>
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
