import { Episode } from "../episode";

describe("Episode model", () => {
  test("should create a Episode model", () => {
    const episode = new Episode(dataMock)
    expect(episode).toBeInstanceOf(Episode)
  });

  test('should render second as 0 when seconds is less than 10', () => { 
    const localMock = {...dataMock}
    localMock.trackTimeMillis = 8000
    
    const episode = new Episode(localMock)
    
    expect(episode.duration).toBe('0:08')
   })

});

const dataMock = {
  episodeFileExtension: "mp3",
  episodeContentType: "audio",
  artworkUrl160:
    "https://is2-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/160x160bb.jpg",
  artistIds: [1535844019],
  description:
    "The JBP kicks off this weeks episode with news of Jonathan Majors facing assault and harassment charges after being arrested over the weekend (16:10). Lamar Jackson has made a statement that he requested a trade from Baltimore earlier this month (47:55), a couple breaks up over a Chris Brown lap dance at one of his shows (1:01:10), and Soulja Boy reacts to questions about whether people would rather have dinner with him or $250 in food stamps (1:34:30). Also, DJ Drama joins the show ahead of two album releases this Friday (1:39:04) + MORE! \n Become a Patron of The Joe Budden Podcast for additional bonus episodes and visual content for all things JBP.: Tap in here www.patreon.com/JoeBudden\n Sleeper Picks:\n Group Selection: Tyler, the Creator & DJ Drama - “Dog Tooth”",
  releaseDate: "2023-03-29T07:00:00Z",
  shortDescription:
    "The JBP kicks off this weeks episode with news of Jonathan Majors facing assault and harassment charges after being arrested over the weekend (16:10). Lamar Jackson has made a statement that he requested a trade from Baltimore earlier this month...",
  episodeUrl:
    "https://traffic.libsyn.com/secure/jbpod/Joe_Budden_Podcast_613.mp3?dest-id=2422538",
  trackId: 1000606418942,
  trackName: 'Episode 613 | "Stand In It"',
  feedUrl: "https://jbpod.libsyn.com/applepodcast",
  closedCaptioning: "none",
  collectionId: 1535809341,
  collectionName: "The Joe Budden Podcast",
  artworkUrl600:
    "https://is2-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/600x600bb.jpg",
  previewUrl:
    "https://traffic.libsyn.com/secure/jbpod/Joe_Budden_Podcast_613.mp3?dest-id=2422538",
  collectionViewUrl:
    "https://itunes.apple.com/us/podcast/the-joe-budden-podcast/id1535809341?mt=2&uo=4",
  trackTimeMillis: 10587000,
  artworkUrl60:
    "https://is2-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/60x60bb.jpg",
  artistViewUrl:
    "https://itunes.apple.com/us/artist/the-joe-budden-network/1535844019?mt=2&uo=4",
  contentAdvisoryRating: "Explicit",
  trackViewUrl:
    "https://podcasts.apple.com/us/podcast/episode-613-stand-in-it/id1535809341?i=1000606418942&uo=4",
  country: "USA",
  episodeGuid: "8b397ede-346e-4b9d-b70f-6a782d64a09e",
  genres: [{ name: "Music", id: "1310" }],
  kind: "podcast-episode",
  wrapperType: "podcastEpisode",
};

export {};
