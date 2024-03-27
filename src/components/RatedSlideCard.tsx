import { HashLink } from "react-router-hash-link";
import { Rating } from "./Rating";
import HeartSVG from "@/assets/icons/heart.svg?react";


type RatedSlideCardProps = {
  image: string;
  locationName: string;
  rating: number;
  to: string;
};

export function RatedSlideCard({ image, locationName, rating, to }: RatedSlideCardProps) {
  return (
    <HashLink to={to} className="rounded-lg">
      <figure className="group overflow-hidden rounded relative">
        <img
          src={image}
          alt=""
          className="rounded duration-500 motion-safe:group-hover:scale-105"
        />
        <div className="absolute bg-black bg-opacity-65 top-0 right-0">
          <HeartSVG />
        </div>
      </figure>
      <div className="px-3 py-5">
        <h5 className="text-xl font-bold text-black">{locationName}</h5>
        <Rating rating={rating} />
      </div>
    </HashLink>
  );
}
