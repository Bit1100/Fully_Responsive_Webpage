import React from "react";
import { routesType } from "../types";

// React Normal Loading Component
import AppWrapper from "../components/AppStructure/AppWrapper";
import Home from "../components/Sections/Home";

// React Lazy Loading Component
const ServicesLazy = React.lazy(
  () => import("../components/Sections/Services")
);
const EventsLazy = React.lazy(() => import("../components/Sections/Events"));
const SubscribeLazy = React.lazy(
  () => import("../components/Sections/Subscribe")
);
const FooterLazy = React.lazy(() => import("../components/Layout/Footer"));

export const routes: routesType = [
  {
    path: "/",
    element: <AppWrapper />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "services",
        element: (
          <React.Suspense fallback={<h1>Loading...</h1>}>
            <ServicesLazy />
          </React.Suspense>
        ),
      },
      {
        path: "events",
        element: (
          <React.Suspense fallback={<h1>Loading...</h1>}>
            <EventsLazy />
          </React.Suspense>
        ),
      },
      {
        path: "subscribe",
        element: (
          <React.Suspense fallback={<h1>Loading...</h1>}>
            <SubscribeLazy />
          </React.Suspense>
        ),
      },
      {
        path: "footer",
        element: (
          <React.Suspense fallback={<h1>Loading...</h1>}>
            <FooterLazy />
          </React.Suspense>
        ),
      },
    ],
  },
  // { path:'*', element: <NavigateWithQuery to="/" />, },
];
