import { Link } from "react-router-dom";
import Image from "./Image";
import { useAppContext } from "../../context";

const Footer = () => {
  const { footerRef } = useAppContext();

  return (
    <footer ref={footerRef}>
      <div className="box about flex flex-col items-center">
        <div className="top">
          <Image name="gel.png" altText="Call Us" />
        </div>
        <div className="bottom flex flex-col justify-center">
          <h3 className="heading">Verify your certificates</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
            deserunt mollitia. Distinctio quaerat, odit aperiam veritatis earum
            fugiat harum voluptatum? Maxime esse enim officia! Eligendi
            reiciendis pariatur ut error repellat incidunt praesentium
            voluptatibus at, impedit consequuntur dolorum tenetur possimus saepe
            voluptas quasi eos, iste, corrupti repellendus! Quae totam
            aspernatur ullam!
          </p>
          <button className="btn footer-btn">View More</button>
          <div className="icon-wrapper flex justify-center items-center">
            <div>
              <Image name="fb.svg" altText="fb" />
            </div>
            <div>
              <Image name="insta.svg" altText="Insta" />
            </div>
            <div>
              <Image name="twitter.svg" altText="Twitter" />
            </div>
            <div>
              <Image name="yt.svg" altText="Twitter" />
            </div>
            <div>
              <Image name="linkedin.svg" altText="Twitter" />
            </div>
          </div>
        </div>
      </div>
      <div className="box links flex flex-col">
        <h3 className="heading section-heading">Quick Links</h3>
        <div className="flex justify-between items-center">
          <div className="left flex flex-col">
            <Link className="flex items-center" to="#">
              <span>&gt;</span>
              <span>Home</span>
            </Link>
            <Link className="flex items-center" to="#">
              <span>&gt;</span>
              <span>Offers</span>
            </Link>
            <Link className="flex items-center" to="#">
              <span>&gt;</span>
              <span>Free Courses</span>
            </Link>
            <Link className="flex items-center" to="#">
              <span>&gt;</span>
              <span>Courses Bundles</span>
            </Link>
            <Link className="flex items-center" to="#">
              <span>&gt;</span>
              <span>Become an Instructor</span>
            </Link>
            <Link className="flex items-center" to="#">
              <span>&gt;</span>
              <span>Corporate Training</span>
            </Link>
            <Link className="flex items-center" to="#">
              <span>&gt;</span>
              <span>Accrediting Bodies</span>
            </Link>
            <Link className="flex items-center" to="#">
              <span>&gt;</span>
              <span>0% Payment Plans</span>
            </Link>
            <Link className="flex items-center" to="#">
              <span>&gt;</span>
              <span>Practice Labs</span>
            </Link>
            <Link className="flex items-center" to="#">
              <span>&gt;</span>
              <span> Subscribe</span>
            </Link>
          </div>
          <div className="right flex flex-col">
            <Link className="flex items-center" to="#">
              <span>&gt;</span>
              <span>About Us</span>
            </Link>
            <Link className="flex items-center" to="#">
              <span>&gt;</span>
              <span>All Courses</span>
            </Link>
            <Link className="flex items-center" to="#">
              <span>&gt;</span>
              <span>Feedback</span>
            </Link>
            <Link className="flex items-center" to="#">
              <span>&gt;</span>
              <span>Forms</span>
            </Link>
            <Link className="flex items-center" to="#">
              <span>&gt;</span>
              <span>Blogs</span>
            </Link>
            <Link className="flex items-center" to="#">
              <span>&gt;</span>
              <span>FAQ</span>
            </Link>
            <Link className="flex items-center" to="#">
              <span>&gt;</span>
              <span>Privacy Policy</span>
            </Link>
            <Link className="flex items-center" to="#">
              <span>&gt;</span>
              <span>Our Partners</span>
            </Link>
            <Link className="flex items-center" to="#">
              <span>&gt;</span>
              <span>CV Builder</span>
            </Link>
            <Link className="flex items-center" to="#">
              <span>&gt;</span>
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="box connect flex flex-col">
        <h3 className="heading section-heading">Connect</h3>
        <div className="top flex flex-col">
          <div className="flex items-center">
            <Image name="call.png" altText="fb" />
            <span>Call Us:+4420-3400-7066</span>
          </div>
          <div className="flex items-center">
            <Image name="wp.svg" altText="Insta" />
            <span>Whatsapp Us:+4420-3467-6066</span>
          </div>
          <div className="flex items-center">
            <Image name="gmail.svg" altText="Twitter" />
            <span>support@globalodulink.co.uk</span>
          </div>
          <div className="flex items-center">
            <Image name="add.svg" altText="Twitter" />
            <span>CityPoint Street, London, EC2Y</span>
          </div>
        </div>
        <div className="bottom flex wrap">
          <Image name="paypal.jpg" altText="fb" />
          <Image name="trust.png" altText="fb" />
          <Image name="gelfin.jpg" altText="fb" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
