import Image from "../../Layout/Image";
import { EventsType } from "../../../types";

const EventCard = ({ event }: EventsType) => {
  const { icon, event: evt } = event;
  return (
    <div className="event flex items-center">
      <Image name={icon} altText="Event Icon" />
      <h3>{evt}</h3>
    </div>
  );
};

export default EventCard;
