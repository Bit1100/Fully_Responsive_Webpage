import Image from "../../Layout/Image";

const HomeTop = () => {
  return (
    <>
      <header className="top">
        <div className="container flex justify-between items-center">
          <div className="left flex justify-center items-center">
            <span>+4420-3409-7966</span>
            <a
              rel="noreferrer noopener"
              href="www.facebook.com"
              target="_blank"
            >
              <Image name="fb.svg" altText="Social Media Icons" />
            </a>
            <a
              rel="noreferrer noopener"
              href="www.instagram.com"
              target="_blank"
            >
              <Image name="insta.svg" altText="Social Media Icons" />
            </a>
            <a rel="noreferrer noopener" href="www.twitter.com" target="_blank">
              <Image name="twitter.svg" altText="Social Media Icons" />
            </a>
            <a rel="noreferrer noopener" href="www.gmail.com" target="_blank">
              <Image name="gmail.svg" altText="Social Media Icons" />
            </a>
          </div>
          <div className="right flex justify-center items-center">
            <button className="btn enquiry-btn">Enquire Now</button>
            <button className="btn login-btn">Login | Register</button>
          </div>
        </div>
      </header>
    </>
  );
};

export default HomeTop;
