import { Slide } from "pure-react-carousel";

type UnratedSwiperSlideProps = {
  image: string;
  locationName: string;
  i: number;
};

export function UnratedSwiperSlide({ image, locationName, i }: UnratedSwiperSlideProps) {
  return (
    <Slide index={i} className="mr-10 last:mr-0">
      <div className="relative">
        <figure className="group overflow-hidden rounded">
          <img src={image} alt="" className="rounded duration-500 group-hover:scale-110" />
        </figure>
        <h5 className="absolute bottom-7 left-4 text-xl font-bold text-white">{locationName}</h5>
      </div>
    </Slide>
  );
}
