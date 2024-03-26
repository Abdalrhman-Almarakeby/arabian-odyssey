import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Spinner } from "flowbite-react";
import axios, { AxiosResponse } from "axios";
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
import { CountryData } from "@/types/country";

export function CountriesSuggestions() {
  const { pathname } = useLocation();
  const [countries, setCountries] = useState<CountryData[] | null>(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://arabian-odyssey.vercel.app/country`)
      .then((res: AxiosResponse) => res.data)
      .then((data: { country: CountryData[] }) => setCountries(data.country))
      .catch((err) => setError(err));
  }, []);

  // Filter the other countries carousel from the country that is
  // displayed in the page (if it exist)
  const currentCountryId = pathname.split("/")[2].split("#")[0];
  const filteredCountries = countries?.filter(({ id }) => id !== currentCountryId);

  return (
    <section className="container px-4">
      <div className="mb-6 flex items-center gap-2">
        <h2 className="whitespace-nowrap text-2xl font-bold">Other Countries</h2>
        <span className="mt-1 h-[2px] w-full bg-primary"></span>
      </div>
      {filteredCountries && (
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full px-8"
        >
          <CarouselContent className="relative -ml-5">
            {filteredCountries.map(({ id, images, name }) => (
              <CarouselItem
                key={name}
                className="pl-5 shadow-xl sm:basis-1/2 md:basis-1/3 xl:basis-1/4"
              >
                <UnratedSlideCard
                  to={`/country/${id}#`}
                  locationName={name}
                  image={images[0].path}
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
      {!error && !countries && <Spinner color="success" size={"xl"} />}
    </section>
  );
}
