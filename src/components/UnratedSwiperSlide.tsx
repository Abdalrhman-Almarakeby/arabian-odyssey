import { Slide } from "pure-react-carousel";

type UnratedSwiperSlideProps = {
  image: string;
  locationName: string;
  i: number;
};

function UnratedSwiperSlide({
  image,
  locationName,
  i,
}: UnratedSwiperSlideProps) {
  return (
    <Slide index={i} className="mr-10 last:mr-0">
      <div className="relative">
        <figure className="overflow-hidden rounded group">
          <img
            src={image}
            alt=""
            className="rounded group-hover:scale-110 duration-500"
          />
        </figure>
        <h5 className="absolute bottom-7 left-4 text-xl font-bold text-white">
          {locationName}
        </h5>
      </div>
    </Slide>
  );
}

export default UnratedSwiperSlide;
