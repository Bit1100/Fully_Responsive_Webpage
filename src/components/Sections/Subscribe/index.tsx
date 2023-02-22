import { useAppContext } from "../../../context";

const Subscribe = () => {
  const { subscribeRef } = useAppContext();
  return (
    <section ref={subscribeRef} className="subscribe" id="subscribe">
      <div className="container flex flex-col justify-between items-center">
        <h3 className="heading">Subscribe to our Newsletter</h3>
        <div className="form flex justify-center items-center">
          <input
            className="form-control"
            type="email"
            placeholder="Enter your Email"
          />
          <button className="btn form-btn">Subscribe</button>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
