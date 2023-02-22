import { NavLink } from "react-router-dom";
import { useAppContext } from "../../context";
import { IsActiveType } from "../../types";

const NavBgLinks = () => {
  const {
    dispatch,
    handleScroll,
    homeRef,
    servicesRef,
    subscribeRef,
    eventsRef,
    footerRef,
  } = useAppContext();

  const navLinkStyles = ({ isActive }: IsActiveType) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
    };
  };

  const handleScrolling = (ref: HTMLDivElement) => {
    dispatch({ type: "SIDEBAR_ISSCALED" });
    handleScroll(ref);
  };

  return (
    <div className="second">
      <ul>
        <li>
          <NavLink
            onClick={() => handleScrolling(homeRef.current)}
            style={navLinkStyles}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => handleScrolling(servicesRef.current)}
            style={navLinkStyles}
            to="/services"
          >
            Offers
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => handleScrolling(subscribeRef.current)}
            style={navLinkStyles}
            to="/subscribe"
          >
            Free Courses
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => handleScrolling(subscribeRef.current)}
            style={navLinkStyles}
            to="/subscribe"
          >
            Courses Bundles
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => handleScrolling(subscribeRef.current)}
            style={navLinkStyles}
            to="/subscribe"
          >
            Become an Instructor
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => handleScrolling(eventsRef.current)}
            style={navLinkStyles}
            to="/events"
          >
            Corporate Training
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => handleScrolling(subscribeRef.current)}
            style={navLinkStyles}
            to="/subscribe"
          >
            Subscribe
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => handleScrolling(footerRef.current)}
            style={navLinkStyles}
            to="/footer"
          >
            Contact Us
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => handleScrolling(footerRef.current)}
            style={navLinkStyles}
            to="/footer"
          >
            Accrediting Bodies
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => handleScrolling(subscribeRef.current)}
            style={navLinkStyles}
            to="/subscribe"
          >
            Practice Labs
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBgLinks;
