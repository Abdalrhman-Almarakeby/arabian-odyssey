import { Slide } from "pure-react-carousel";
import { Review } from "./Review";

type RatedSwiperSlideProps = {
  image: string;
  locationName: string;
  rating: number;
  i: number;
};

export function RatedSwiperSlide({ image, locationName, rating, i }: RatedSwiperSlideProps) {
  return (
    <Slide index={i} className="mr-10 last:mr-0">
      <figure className="group overflow-hidden rounded">
        <img src={image} alt="" className="rounded duration-500 group-hover:scale-110" />
      </figure>
      <div>
        <h5 className="text-xl font-bold text-black">{locationName}</h5>
        <Review rating={rating} />
      </div>
    </Slide>
  );
}
