import { Http } from "../http";
import { Podcast } from "../../models/podcast";
import getPodcasts from "../podcast.service";

describe("Podcast service", () => {
  let expectedData: Partial<Podcast>[];
  beforeEach(() => {
    // localStorage.clear()
    const spy = jest.spyOn(Http, "get").mockImplementation(() => {
      return Promise.resolve(data);
    });

    expectedData = [
      {
        title: "Podcast 1",
        description: "Summary 1",
        image: "imageSrc",
        author: "Artist 1",
        id: "12345",
        shortTitle: "Podcast 1",
      },
      {
        title: "Podcast 2",
        description: "Summary 2",
        image: "imageSrc",
        author: "Artist 2",
        id: "12346",
        shortTitle: "Podcast 2",
      },
    ];
  });

  test("should get episodes when doesn't exist cache", async () => {
    const response = await getPodcasts();

    expect(response).toEqual(expectedData);
  });

  test("should get data from cache when exist cache", async () => {
    const localStorageMock = {
      getItem: jest.fn(),
    };
    localStorageMock.getItem.mockReturnValueOnce("2");
    localStorageMock.getItem.mockReturnValueOnce(JSON.stringify(data));
    // @ts-ignore
    global.localStorage = localStorageMock;

    const cachePodcast = await getPodcasts();

    expect(cachePodcast).toEqual(expectedData);
  });
});

const data = {
  feed: {
    entry: [
      {
        title: { label: "Podcast 1" },
        "im:artist": { label: "Artist 1" },
        summary: { label: "Summary 1" },
        "im:image": [{}, {}, { label: "imageSrc" }],
        id: {
          attributes: {
            "im:id": "12345",
          },
        },
      },
      {
        title: { label: "Podcast 2" },
        "im:artist": { label: "Artist 2" },
        summary: { label: "Summary 2" },
        "im:image": [{}, {}, { label: "imageSrc" }],
        id: {
          attributes: {
            "im:id": "12346",
          },
        },
      },
    ],
  },
};
