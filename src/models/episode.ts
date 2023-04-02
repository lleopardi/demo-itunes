import { Result } from "./episodes.response";

export class Episode {
  title: string;
  date: string;
  duration: string;
  id: number;
  episodeUrl: string;
  description: string;

  constructor(response: Result) {
    this.title = response.trackName;
    this.duration = this.getDuration(response.trackTimeMillis);
    this.date = new Date(response.releaseDate).toLocaleDateString();
    this.id = response.trackId;
    this.episodeUrl = response.episodeUrl;
    this.description = response.description;
  }

  getDuration(milliseconds: number) {
    const minutes = Math.floor(milliseconds / 60000);
    const seconds = +((milliseconds % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  }
}
