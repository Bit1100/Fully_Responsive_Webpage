import React from "react";
import Footer from "../Layout/Footer";
import Home from "../Sections/Home";

const ServicesLazy = React.lazy(() => import("../Sections/Services"));
const EventsLazy = React.lazy(() => import("../Sections/Events"));
const SubscribeLazy = React.lazy(() => import("../Sections/Subscribe"));
const FooterLazy = React.lazy(() => import("../Layout/Footer"));

const AppContent = () => {
  return (
    <div className="site-content">
      <Home />
      <React.Suspense fallback="LOADING...">
        <ServicesLazy />
        <EventsLazy />
        <SubscribeLazy />
        <FooterLazy />
      </React.Suspense>
    </div>
  );
};

export default AppContent;
