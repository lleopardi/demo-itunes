import { API_EPISODES, DAY_IN_MILLISECONDS, PROXY_URL, StorageKeys } from "./constants";

import { Episode } from "../models/episode";
import { EpisodesResponse } from "../models/episodes.response";
import { Http } from "./http";
import { LoaderFunctionArgs } from "react-router-dom";

const validateExpired = (
  now: number,
  id: string,
  cacheEpisodes: { [key: string]: { detailPersistedAt: number } }
) => {
  if (!cacheEpisodes?.detailPersistedAt) return true;
  const persistedAt = cacheEpisodes[id]?.detailPersistedAt || 0;
  return persistedAt - now <= 0;
};

const getEpisodesByPodcastId = async ({ params }: LoaderFunctionArgs) => {
  const podcastId = params.id || '';
  const cacheEpisodes = JSON.parse(
    localStorage.getItem(StorageKeys.details) || "{}"
  );

  const now = Date.now();
  const isExpired = validateExpired(now, podcastId, cacheEpisodes);
  
  if (!isExpired) {
    const episodes: Episode[] = cacheEpisodes[podcastId].episodes;
    return { episodes };
  } else {
    const api = `${API_EPISODES}id=${podcastId}&entity=podcastEpisode&limit=100`;
    const data = await Http.get<EpisodesResponse>(api)

    const episodes: Episode[] = [];

    data.results.forEach((item) => {
      if (item.kind === "podcast-episode") {
        const podcast = new Episode(item);
        episodes.push(podcast);
      }
    });

    cacheEpisodes[podcastId] = {
      episodes,
      detailPersistedAt: now + DAY_IN_MILLISECONDS,
    };
    localStorage.setItem(StorageKeys.details, JSON.stringify(cacheEpisodes));
    return { episodes };
  }
};

export default getEpisodesByPodcastId;
