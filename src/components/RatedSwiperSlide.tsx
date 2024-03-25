import { Link } from "react-router-dom";
import { Rating } from "./Rating";

type RatedSwiperSlideProps = {
  image: string;
  locationName: string;
  rating: number;
  to: string;
};

export function RatedSwiperSlide({ image, locationName, rating, to }: RatedSwiperSlideProps) {
  return (
    <Link to={to}>
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
    </Link>
  );
}
