import { SectionHeading } from "@/components/SectionHeading";
import { useEffect, useState } from "react";
import { Spinner } from "flowbite-react";
import axios, { AxiosResponse } from "axios";
import { State } from "@/types/state";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/Carousel";
import { UnratedSlideCard } from "@/components/UnratedSlideCard";
import AngleRightSVG from "@/assets/icons/angle-right.svg?react";
import AngleLeftSVG from "@/assets/icons/angle-left.svg?react";

export function TopDestinationsSection() {
  const [states, setStates] = useState<State[] | null>(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://arabian-odyssey.vercel.app/state`)
      .then((res: AxiosResponse) => res.data)
      .then((data: { state: State[] }) => setStates(data.state))
      .catch((err) => setError(err));
  }, []);

  return (
    <section className="container flex flex-col items-center justify-center gap-8 px-4 lg:gap-12">
      <SectionHeading>Top Destinations</SectionHeading>
      {states && (
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full px-8"
        >
          <CarouselContent className="relative -ml-5">
            {states.map(({ id, image, name, country }) => (
              <CarouselItem key={name} className="pl-5 shadow-xl md:basis-1/2 lg:basis-1/3">
                <UnratedSlideCard
                  to={`/country/${country}/${id}#`}
                  locationName={name}
                  image={image.path}
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
      )}
      {error && (
        <p className="text-center text-base text-red-500">Unable to get data, try again later</p>
      )}
      {!error && !states && <Spinner color="success" size={"xl"} />}
    </section>
  );
}
