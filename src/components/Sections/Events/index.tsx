import SectionHeading from "../../Layout/SectionHeading";
import EventCard from "./EventCard";
import { events } from "../../../data";
import { useAppContext } from "../../../context";
import { useNavigate } from "react-router-dom";

const Events = () => {
  const { eventsRef, handleScroll, homeRef } = useAppContext();
  const navigate = useNavigate();

  const goToHome = () => {
    handleScroll(homeRef.current);
    navigate("/subscribe");
  };

  return (
    <section ref={eventsRef} className="events" id="events">
      <SectionHeading heading="Current Events" />
      <div className="container flex flex-col tems-center justify-between">
        <p className="details">
          All our learners and any prospective are eligible for our free teaser
          seminar. Attending to these seminars are the most effective way to
          determine your path to education, with the team of leading instructors
          of the industry, you will be getting guidance and learning from the
          best. We offer seminars in:
        </p>
        <div className="event-wrapper flex flex-col justify-center">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
        <p className="note">
          Fill the form and reserve your spot absolutely free
        </p>
        <button onClick={goToHome} className="btn event-btn">
          Reserve your Spot
        </button>
      </div>
    </section>
  );
};

export default Events;
