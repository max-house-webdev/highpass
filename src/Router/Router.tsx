import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Page } from "@pages/Page";
import { Home } from "@pages/Home";
import { NotFound } from "@pages/NotFound";
import { NotSupportedDevice } from "@src/pages/NotSupportedDevice";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Page>
        <Home />
      </Page>
    ),
  },
  {
    path: "/not-supported-device",
    element: (
      <Page>
        <NotSupportedDevice />
      </Page>
    ),
  },
  {
    path: "*",
    element: (
      <Page>
        <NotFound />
      </Page>
    ),
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
