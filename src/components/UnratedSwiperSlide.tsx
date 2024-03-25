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
    <Slide index={i} className="mr-10 rounded-lg shadow-md last:mr-0">
      <Link to={`${linkTo}/${id}`} className="relative">
        <figure className="group overflow-hidden rounded">
          <img src={image} alt="" className="rounded duration-500 group-hover:scale-110" />
        </figure>
        <h5 className="text-lg absolute bottom-5 left-2 rounded-md bg-black/40 px-2.5 py-1.5 font-bold text-white">
          {locationName}
        </h5>
      </Link>
    </Slide>
  );
}
