import { render, screen } from "@testing-library/react";

import Card from "../Card";
import React from "react";

describe("Card component", () => {
  test("Should render the card with a h1", async () => {
    const expectedValue = 'Hello World'
    render(
      <Card>
        <h1>Hello World</h1>
      </Card>
    );

    const h1 = await screen.getByText(/Hello World/);
    const value = h1.textContent

    expect(value).toBe(expectedValue)

  });
});
