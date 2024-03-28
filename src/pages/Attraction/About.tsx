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
import { HashLink } from "react-router-hash-link";

type AboutProps = {
  attraction: Attraction;
};

export function About({ attraction }: AboutProps) {
  const [active, setActive] = useState<string>(attraction.images[0].path);

  useEffect(() => {
    setActive(attraction.images[0].path);
  }, [attraction]);

  return (
    <div className="mb-20 flex flex-col gap-10 px-10 pb-5 shadow-md md:mb-15 md:gap-14 lg:flex-row lg:gap-0">
      <div className="pt-5 lg:hidden">
        <h1 className="mb-1 text-3xl font-bold">{attraction.name}</h1>
        <Rating rating={attraction.rating} />
      </div>
      <div className="grid w-full gap-4 rounded">
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
            {attraction.images.map(({ path }) => (
              <CarouselItem
                key={path}
                className="grid basis-1/2 place-items-center pl-5 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5"
              >
                <img
                  onClick={() => setActive(path)}
                  src={path}
                  className={`h-20 max-w-full cursor-pointer rounded-lg object-cover object-center ${
                    active === path && "opacity-60"
                  }`}
                  alt="gallery-image"
                />
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
      <div className="w-full px-0 sm:max-w-[500px] md:min-h-full md:max-w-none lg:pl-10 lg:pr-6">
        <div className="mb-8 hidden lg:block">
          <h1 className="mb-1 text-3xl font-bold">{attraction.name}</h1>
          <Rating rating={attraction.rating} />
        </div>
        <h2 className="mb-1 text-2xl font-bold md:text-3xl">About</h2>
        <Link to={`/country/${attraction.country.id}/${attraction.state.id}`}>
          <p className="flex items-center text-sm font-light underline">
            <LocationDotSVG className="mr-1 size-5" />
            {attraction.state.name}, {attraction.country.name}
          </p>
        </Link>
        <p className="mb-4 mt-6 text-base font-light">{attraction.desc}</p>
        <div className="flex flex-wrap items-start gap-3">
          {attraction.openingHours && <Badge color={"success"}>{attraction.openingHours}</Badge>}
          {attraction.admissionFees && <Badge color={"success"}>{attraction.admissionFees}</Badge>}
          {attraction.category.map((item) => (
            <HashLink to={`/category/${item.id}#`} key={item.id}>
              <Badge color={"success"} className="underline">
                {item.name}
              </Badge>
            </HashLink>
          ))}
        </div>
      </div>
    </div>
  );
}
