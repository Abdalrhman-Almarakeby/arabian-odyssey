import { Slide } from "pure-react-carousel";
import { Review } from "./Review";
import { Link } from "react-router-dom";

type RatedSwiperSlideProps = {
  image: string;
  locationName: string;
  rating: number;
  i: number;
  linkTo: string;
  id: string
};

export function RatedSwiperSlide({ image, locationName, id, rating, i, linkTo }: RatedSwiperSlideProps) {
  return (
    <Slide index={i} className="mr-10 last:mr-0">
      <Link to={`${linkTo}/${id}`}>
      <figure className="group overflow-hidden rounded">
        <img src={image} alt="" className="rounded duration-500 group-hover:scale-110" />
      </figure>
      <div>
        <h5 className="text-xl font-bold text-black">{locationName}</h5>
        <Review rating={rating} />
      </div>
      </Link>
    </Slide>
  );
}
