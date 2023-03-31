import { Entry, ItunesResponse } from "../models/itunes.response";
import { Podcast } from "../models/podcast";
import { StorageKeys, PROXY_URL, DAY_IN_MILLISECONDS } from "./constants";

const validateExpired = (now: number) => {
  const expireDate = localStorage.getItem(StorageKeys.podcastsPersistedAt);
  const persistedAt = expireDate ? +expireDate : 0;
  return persistedAt - now <= 0;
}

const parser = (entries: Entry[]) => {
  return entries.map(entry => new Podcast(entry)
  )
}

const getPodcasts = async () => {
  const api =
    "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json";

  const now = Date.now();
  const isExpired = validateExpired(now)

  if (!isExpired) {
    const localData = localStorage.getItem(StorageKeys.podcasts) || '[]';
    return JSON.parse(localData)
  } else {
    const response = await fetch(PROXY_URL + api);
    if(!response.ok){
      console.error('Error: ', response.statusText, response)
    }

    const data: ItunesResponse = await response.json();
    const podcast: Podcast[] = parser(data.feed.entry)

    localStorage.setItem(StorageKeys.podcasts, JSON.stringify(podcast));
    localStorage.setItem(
      StorageKeys.podcastsPersistedAt,
      JSON.stringify(now + DAY_IN_MILLISECONDS)
    );
    return podcast
  }
};


export default getPodcasts;
