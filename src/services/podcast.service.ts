import { API_PODCAST, DAY_IN_MILLISECONDS, PROXY_URL, StorageKeys } from "./constants";
import { Entry, ItunesResponse } from "../models/itunes.response";

import { Http } from "./http";
import { Podcast } from "../models/podcast";

const validateExpired = (now: number) => {
  const expireDate = localStorage.getItem(StorageKeys.podcastsPersistedAt);
  const persistedAt = expireDate ? +expireDate : 0;
  return persistedAt - now <= 0;
};

const parser = (entries: Entry[]) => {
  return entries.map((entry) => new Podcast(entry));
};

const getPodcasts = async () => {
  const now = Date.now();
  const isExpired = validateExpired(now);

  if (!isExpired) {
    const localData = localStorage.getItem(StorageKeys.podcasts) || "[]";
    return JSON.parse(localData);
  } else {
    const api = `${PROXY_URL}${API_PODCAST}limit=100/genre=1310/json`
    const data = await Http.get<ItunesResponse>(api)
    
    const podcast: Podcast[] = parser(data.feed.entry);

    localStorage.setItem(StorageKeys.podcasts, JSON.stringify(podcast));
    localStorage.setItem(
      StorageKeys.podcastsPersistedAt,
      JSON.stringify(now + DAY_IN_MILLISECONDS)
    );
    return podcast; 
  }
};

export default getPodcasts;
