import { cleanup, render, screen } from "@testing-library/react";

import CardCover from "../CardCover";
import { MemoryRouter } from "react-router-dom";
import { Podcast } from "../../models/podcast";
import React from "react";
import userEvent from '@testing-library/user-event'

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom') as any,
   useNavigate: () => mockedUsedNavigate,
 }));

describe("CardCover component", () => {
  beforeEach(() => {
    cleanup();
    const podcast: Podcast = {
      author: "Jhon Doe",
      description: "description",
      shortTitle: "",
      id: "1",
      image: "Some, image",
      title: "Some Title",
      getShortTitle: jest.fn(),
    };
    render(
      <MemoryRouter>
        <CardCover podcast={podcast}></CardCover>
      </MemoryRouter>
    );
  });

  beforeAll(()=> {
    cleanup()
  })
  
  test("should renderer the component when pass props", async () => {
    const expectedData = {
      author: "by: Jhon Doe",
      description: "description",
      title: "Some Title",
    };

    const title = await screen.getByText(/Some Title/);
    const author = await screen.getByText(/by:/);
    const description = await screen.getByText(/description/);

    expect(title.textContent).toBe(expectedData.title);
    expect(description.textContent).toBe(expectedData.description);
    expect(author.textContent).toBe(expectedData.author);
  });

  test("should navigate when click the title", async () => {
    const title = await screen.getByText(/Some Title/);
    await userEvent.click(title)

    expect(mockedUsedNavigate).toHaveBeenCalled()
    
  });
});

export {};
