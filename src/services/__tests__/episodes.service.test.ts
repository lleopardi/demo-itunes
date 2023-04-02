import { cachedData, expectedData, mockdata } from "./episodes.mock";

import { Http } from "../http";
import { LoaderFunctionArgs } from "react-router-dom";
import getEpisodesByPodcastId from "../episodes.service";

describe("Episode service", () => {
  beforeEach(() => {
    const spy = jest.spyOn(Http, "get").mockImplementation(() => {
      return Promise.resolve(mockdata);
    });
  });

  test("should get episodes when does not exist cache", async () => {
    const params: Partial<LoaderFunctionArgs> = {
      params: { id: "2" },
    };

    //@ts-ignore
    const episodes = await getEpisodesByPodcastId(params);

    expect(episodes).toEqual(expectedData);
  });

  
});

export {};
