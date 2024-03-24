import { Slide } from "pure-react-carousel";
import { Link } from "react-router-dom";

type UnratedSwiperSlideProps = {
  image: string;
  locationName: string;
  i: number;
  linkTo?: string;
  id: string;
};

export function UnratedSwiperSlide({
  image,
  locationName,
  i,
  linkTo,
  id,
}: UnratedSwiperSlideProps) {
  return (
    <Slide index={i} className="mr-10 last:mr-0">
      <Link to={`${linkTo}/${id}`}>
        <div className="relative">
          <figure className="group overflow-hidden rounded">
            <img src={image} alt="" className="rounded duration-500 group-hover:scale-110" />
          </figure>
          <h5 className="absolute bottom-7 left-4 text-xl font-bold text-white">{locationName}</h5>
        </div>
      </Link>
    </Slide>
  );
}
