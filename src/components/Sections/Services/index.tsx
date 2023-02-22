import InfoCard from "./InfoCard";
import { useAppContext } from "../../../context";
import { infos } from "../../../data";

const Services = () => {
  const { servicesRef } = useAppContext();

  return (
    <section ref={servicesRef} id="infos" className="infos">
      <div className="container flex justify-center items-center wrap">
        {infos.map((info) => (
          <InfoCard key={info.id} info={info} />
        ))}
      </div>
    </section>
  );
};

export default Services;
