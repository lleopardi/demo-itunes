import { Entry } from "./itunes.response";

export class Podcast {
  author: string;
  image: string;
  title: string;
  description: string;
  id: string;
  shortTitle: string

  constructor(entry: Entry) {
    this.title = entry.title.label;
    this.description = entry.summary.label;
    this.image = entry["im:image"][2].label;
    this.author = entry["im:artist"].label;
    this.id = entry.id.attributes["im:id"];
    this.shortTitle = this.getShortTitle()
  }

  getShortTitle() {
    const maxLong = 32;
    if (this.title.length > maxLong) {
      return `${this.title.slice(0, maxLong)}...`;
    }
    return this.title;
  }
}
