import {
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import { render, screen } from "@testing-library/react";

import Header from "../Header";
import React from "react";

describe("Header Component", () => {
  test("should render the title when load the component", async () => {
    const routes = [
      {
        path: "/",
        element: <Header title="Podcaster"></Header>,
      },
    ];
    const router = createMemoryRouter(routes, {
      initialEntries: ["/"],
    });
    render(<RouterProvider router={router} />);

    const title = await screen.getByText(/Podcaster/)
    
    expect(title.textContent).toBe("Podcaster");
  });
});

export {};
