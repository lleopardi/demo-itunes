import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, createHashRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

const App = () => {
  return <h1>Hello world</h1>
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
    </Route>
  )
);



const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
