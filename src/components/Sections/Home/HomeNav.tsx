import { NavLink } from "react-router-dom";
import Image from "../../Layout/Image";
import { useAppContext } from "../../../context";

const HomeNav = () => {
  const {
    handleScroll,
    homeRef,
    servicesRef,
    subscribeRef,
    eventsRef,
    footerRef,
  } = useAppContext();

  return (
    <>
      <nav>
        <div className="container flex justify-between items-center">
          <div className="slogan flex items-center">
            <div>
              <Image name="gel.png" altText="Call Us" />
            </div>
          </div>
          <div className="container navigation flex justify-center items-center">
            <ul className="flex justify-between items-center">
              <li>
                <NavLink onClick={() => handleScroll(homeRef.current)} to="/">
                  COURSES BY SUBJECT
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => handleScroll(servicesRef.current)}
                  to="/services"
                >
                  CAREER RELATED
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => handleScroll(eventsRef.current)}
                  to="/events"
                >
                  FREBBIES
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => handleScroll(subscribeRef.current)}
                  to="/subscribe"
                >
                  JOIN EVENTS
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => handleScroll(footerRef.current)}
                  to="/footer"
                >
                  AWARDING BODES
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => handleScroll(footerRef.current)}
                  to="/footer"
                >
                  CONTACT
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default HomeNav;
