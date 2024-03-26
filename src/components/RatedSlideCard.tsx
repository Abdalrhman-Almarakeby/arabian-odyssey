import { HashLink } from "react-router-hash-link";
import { Rating } from "./Rating";

type RatedSlideCardProps = {
  image: string;
  locationName: string;
  rating: number;
  to: string;
};

export function RatedSlideCard({ image, locationName, rating, to }: RatedSlideCardProps) {
  return (
    <HashLink to={to} className="rounded-lg">
      <figure className="group overflow-hidden rounded">
        <img
          src={image}
          alt=""
          className="rounded duration-500 motion-safe:group-hover:scale-105"
        />
      </figure>
      <div className="px-3 py-5">
        <h5 className="text-xl font-bold text-black">{locationName}</h5>
        <Rating rating={rating} />
      </div>
    </HashLink>
  );
}
