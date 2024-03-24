import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import { Spinner } from "flowbite-react";
import { Wallpaper } from "@/components/Wallpaper";
import { Attractions } from "@/components/Attractions";
import { CountriesSuggestions } from "@/components/CountriesSuggestions";
import { CountryData } from "@/types/country";
import { Description } from "./Description";
import { Food } from "./Food";

export function Country() {
  const { countryId } = useParams();
  const [country, setCountry] = useState<CountryData | null>(null);

  useEffect(() => {
    axios
      .get(`https://arabian-odyssey.vercel.app/country/${countryId}`)
      .then((res: AxiosResponse) => res.data)
      .then((data: { country: CountryData }) => setCountry(data.country))
      .catch((err) => console.log(err));
  }, [countryId]);

  return (
    <>
      {country ? (
        <>
          <header className="h-[calc(100svh-64px)]">
            <Wallpaper name={country.name} flag={country.flag.path} images={country.images} />
          </header>
          <main className="px-6 pb-[120px] pt-[50px]">
            <Description country={country} countryId={countryId} />
            <Food foodData={country.popularFood} />
            <Attractions data={country.attractions} />
            <CountriesSuggestions />
          </main>
        </>
      ) : (
        <main className="flex h-[calc(100svh-64px)] w-full items-center justify-center">
          <Spinner color={"success"} size={"xl"} />
        </main>
      )}
    </>
  );
}
