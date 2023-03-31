export interface EpisodesResponse {
  resultCount: number;
  results: Result[];
}

export interface Result {
  country: string;
  previewUrl: string;
  artistIds: any[];
  genres: Genre[];
  episodeGuid: string;
  trackId: number;
  trackName: string;
  description: string;
  collectionId: number;
  collectionName: string;
  closedCaptioning: string;
  releaseDate: string;
  shortDescription: string;
  feedUrl: string;
  artworkUrl600: string;
  episodeUrl: string;
  artworkUrl160: string;
  episodeFileExtension: string;
  episodeContentType: string;
  artworkUrl60: string;
  contentAdvisoryRating: string;
  trackViewUrl: string;
  collectionViewUrl: string;
  trackTimeMillis: number;
  kind: string;
  wrapperType: string;
}

export interface Genre {
  name: string;
  id: string;
}
