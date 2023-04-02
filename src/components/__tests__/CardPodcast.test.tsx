import CardPodcast from "../CardPodcast";
import { Podcast } from "../../models/podcast";
import React from "react";
import { render } from "@testing-library/react";
describe('CardPodcast component', ()=>{
  test('should first', async() => { 
    const podcast: Podcast = {
      author: "Jhon Doe",
      description: "description",
      shortTitle: "Short title",
      id: "1",
      image: "Some, image",
      title: "Some Title",
      getShortTitle: jest.fn(),
    };

    const expectedData = {
      shortTitle: 'Short title',
      author: 'Author: Jhon Doe'
    }
    const {getByText } = render(<CardPodcast podcast={podcast}></CardPodcast>)

    const shortTitle = await getByText(/Short title/)
    const author = await getByText(/Jhon Doe/)

    expect(shortTitle.textContent).toBe(expectedData.shortTitle);
    expect(author.textContent).toBe(expectedData.author)

   })
})
export {}