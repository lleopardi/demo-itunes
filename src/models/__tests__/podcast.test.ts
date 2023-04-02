import { Podcast } from "../podcast";

describe("Podcast Model", () => {
  test("should create a Podcast model when call to the constructor", () => {
    const podcast = new Podcast(mockData);
    expect(podcast).toBeInstanceOf(Podcast);
    expect(podcast.shortTitle).toBe("This Little Light - Cadence13 an...");
  });

  test("should show a shorter version of the title when the title is greater than 32 characters", () => {
    const podcast = new Podcast(mockData);
    expect(podcast).toBeInstanceOf(Podcast);
    expect(podcast.shortTitle).toBe("This Little Light - Cadence13 an...");
  });

  test("should show a original version of the title when the title is less than 32 characters", () => {
    const mockShorter = { ...mockData, title: { label: "short version" } };

    const podcast = new Podcast(mockShorter);
    expect(podcast).toBeInstanceOf(Podcast);
    expect(podcast.shortTitle).toBe("short version");
  });
});

const mockData = {
  "im:name": { label: "This Little Light" },
  "im:image": [
    {
      label:
        "https://is3-ssl.mzstatic.com/image/thumb/Podcasts116/v4/f6/cf/66/f6cf66f5-8696-1903-f3b3-e95c507c8e9c/mza_5620205623101925377.jpg/55x55bb.png",
      attributes: { height: "55" },
    },
    {
      label:
        "https://is5-ssl.mzstatic.com/image/thumb/Podcasts116/v4/f6/cf/66/f6cf66f5-8696-1903-f3b3-e95c507c8e9c/mza_5620205623101925377.jpg/60x60bb.png",
      attributes: { height: "60" },
    },
    {
      label:
        "https://is2-ssl.mzstatic.com/image/thumb/Podcasts116/v4/f6/cf/66/f6cf66f5-8696-1903-f3b3-e95c507c8e9c/mza_5620205623101925377.jpg/170x170bb.png",
      attributes: { height: "170" },
    },
  ],
  summary: {
    label:
      "Hosted by Flea, founding member and bassist of the Red Hot Chili Peppers, This Little Light is a podcast about falling in love with music. Flea interviews musical guests from all genres to discuss the teachers who guided them, the influences that inspired them, and how the lessons they learned as young musicians have shaped their creativity, resilience, and careers. Guests range from legends to rising stars, and include Rick Rubin, Patti Smith, Thundercat Margo Price, and Cynthia Erivo. The podcast is produced by Cadence13 and Parallel, with proceeds benefiting the Silverlake Conservatory of Music, a Los Angeles-based non-profit that Flea co-founded in 2001.",
  },
  "im:price": { label: "Get", attributes: { amount: "0", currency: "USD" } },
  "im:contentType": { attributes: { term: "Podcast", label: "Podcast" } },
  rights: {
    label:
      "© 2023 Cadence13, LLC and Waypoint Wellness, LLC.  All Rights Reserved.",
  },
  title: { label: "This Little Light - Cadence13 and Parallel" },
  link: {
    attributes: {
      rel: "alternate",
      type: "text/html",
      href: "https://podcasts.apple.com/us/podcast/this-little-light/id1678378239?uo=2",
    },
  },
  id: {
    label:
      "https://podcasts.apple.com/us/podcast/this-little-light/id1678378239?uo=2",
    attributes: { "im:id": "1678378239" },
  },
  "im:artist": { label: "Cadence13 and Parallel" },
  category: {
    attributes: {
      "im:id": "1525",
      term: "Music Interviews",
      scheme:
        "https://podcasts.apple.com/us/genre/podcasts-music-music-interviews/id1525?uo=2",
      label: "Music Interviews",
    },
  },
  "im:releaseDate": {
    label: "2023-03-21T12:45:00-07:00",
    attributes: { label: "March 21, 2023" },
  },
};

export {};
