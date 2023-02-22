import { useAppContext } from "../../../context";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { homeRef, handleScroll, eventsRef } = useAppContext();
  const navigate = useNavigate();

  const goToEvents = () => {
    handleScroll(eventsRef.current);
    navigate("/events");
  };

  return (
    <header ref={homeRef} id="home" className="hero">
      <div className="flex justify-center items-center wrap">
        <div className="left flex-col items-center">
          <h1>
            <span>FREE SEMINAR</span>
          </h1>
          <p className="intro">
            Come to one of our free seminars, where we provide top notch
            teaching from expert instructors and innovative lessons to update
            your knowledge for free.
          </p>
          <div className="flex items-center">
            <button onClick={goToEvents} className="btn btn-primary">
              View Events
            </button>
          </div>
        </div>
        <div className="right">
          <div className="inner">
            <h2>Reserve Your Seat</h2>
            <div className="flex items-center">
              <input placeholder="Full Name*" />
            </div>
            <div className="flex items-center">
              <input placeholder="Contact no.*" />
            </div>
            <div className="flex items-center">
              <input placeholder="Email Address*" />
            </div>
            <div className="flex items-center">
              <input placeholder="Select the Event*" />
            </div>
            <div className="flex items-center">
              <textarea placeholder="Message*" />
            </div>
            <div className="flex items-center">
              <button className="btn submit-btn">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Home;
