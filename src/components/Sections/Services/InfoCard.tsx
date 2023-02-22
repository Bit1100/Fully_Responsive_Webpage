import Image from "../../Layout/Image";
import { InfosType } from "../../../types";

const Card = ({ info }: InfosType) => {
  const { title, imageSrc, description } = info;

  return (
    <div className="card flex flex-col">
      <div className="top flex justify-center items-center">
        <Image name={imageSrc} altText={title} />
      </div>
      <div className="bottom flex flex-col justify-center items-center">
        <h3>{title}</h3>
        <h4>{description}</h4>
      </div>
    </div>
  );
};

export default Card;
