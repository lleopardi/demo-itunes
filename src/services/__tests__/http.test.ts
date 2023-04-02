import { Http } from "../http";

describe("Http", () => {
  describe("GET", () => {
    test("should return data if the request is successful", async () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve("test data"),
      });

      const result = await Http.get<string>("https://example.com/api/data");
      
      expect(result).toEqual("test data");
    });
  });
});
