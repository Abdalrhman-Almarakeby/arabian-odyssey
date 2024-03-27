import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/Carousel";
import AngleRightSVG from "@/assets/icons/angle-right.svg?react";
import AngleLeftSVG from "@/assets/icons/angle-left.svg?react";
import LocationDotSVG from "@/assets/icons/location-dot.svg?react";
import { Rating } from "@/components/Rating";
import { Attraction } from "@/types/attraction";
import { useEffect, useState } from "react";
import { Badge } from "flowbite-react";
import { Link } from "react-router-dom";

type AboutProps = {
  attraction: Attraction;
};

export function About({ attraction }: AboutProps) {
  const [active, setActive] = useState<string>(attraction.images[0].path);
  useEffect(() => {
    setActive(attraction.images[0].path)
  }, [attraction])
  return (
    <div>
      <div className="mb-8">
        <h1 className="font-bold text-2xl mb-1">{attraction.name}</h1>
        <Rating rating={attraction.rating} />
      </div>
      <div className="mb-20 flex flex-col row md:mb-15 md:flex-row shadow-md pb-5">
        <div className="grid gap-4 w-full rounded sm:max-w-[500px]">
          <div>
            <img
              className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
              src={active}
              alt=""
            />
          </div>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full px-8"
          >
            <CarouselContent className="relative -ml-5">
              {attraction.images.map(({ path }, i) => (
                <CarouselItem
                  key={i}
                  className="pl-5 shadow-xl md:basis-1/2 lg:basis-1/3"
                >
                  <div>
                    <img
                      onClick={() => setActive(path)}
                      src={path}
                      className={`h-20 max-w-full cursor-pointer rounded-lg object-cover object-center ${
                        active === path && "opacity-60"
                      }`}
                      alt="gallery-image"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute -left-[15px] top-1/2 grid size-[40px] -translate-y-1/2 place-items-center rounded-full border bg-white">
              <AngleLeftSVG className="w-[15px] fill-primary" />
            </CarouselPrevious>
            <CarouselNext className="absolute -right-[15px] top-1/2 grid size-[40px] -translate-y-1/2 place-items-center rounded-full border bg-white">
              <AngleRightSVG className="w-[15px] fill-primary" />
            </CarouselNext>
          </Carousel>
        </div>
        <div className="w-full px-6 pb-8 pt-4 sm:max-w-[500px] md:max-w-none md:min-h-full">
          <h2 className="mb-1 text-2xl font-bold">About</h2>
          <Link to={`/country/${attraction.country.id}/${attraction.state.id}`}>
            <p className="text-sm font-light flex items-center underline">
              <LocationDotSVG className="size-5 mr-1" />
              {attraction.state.name}, {attraction.country.name}
            </p>
          </Link>
          <p className="mb-4 mt-6 max-w-[450px] text-base font-light">
            {attraction.desc}
          </p>
          <div className="">
            {attraction.openingHours && (
              <Badge color={"success"} className="w-max mb-3">
                {attraction.openingHours}
              </Badge>
            )}
            {attraction.admissionFees && (
              <Badge color={"success"} className="w-max">
                {attraction.admissionFees}
              </Badge>
            )}
            <div className="mt-3 flex max-w-[400px] flex-wrap gap-2">
              {attraction.category.map((item, i) => (
                <Link to={`/category/${item.id}`} key={i}>
                  <Badge color={"success"} className="underline">
                    {item.name}
                  </Badge>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
