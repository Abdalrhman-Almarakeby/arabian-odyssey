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
import { StateData } from "@/types/state";

type CountryProps = {
  isState: boolean;
};

export function Country({ isState }: CountryProps) {
  const { countryId, stateId } = useParams();
  const [country, setCountry] = useState<CountryData | null>(null);
  const [state, setState] = useState<StateData | null>(null);
  useEffect(() => {
    axios
      .get(`https://arabian-odyssey.vercel.app/country/${countryId}`)
      .then((res: AxiosResponse) => res.data)
      .then((data: { country: CountryData }) => setCountry(data.country))
      .catch((err) => console.log(err));
  }, [countryId]);

  useEffect(() => {
    if (stateId) {
      axios
        .get(`https://arabian-odyssey.vercel.app/state/${stateId}`)
        .then((res: AxiosResponse) => res.data)
        .then((data: { state: StateData }) => setState(data.state))
        .catch((err) => console.log(err));
    }
  }, [stateId]);

  return (
    <>
      {country ? (
        <>
          <Wallpaper name={country.name} flag={country.flag.path} images={country.images} />
          <main className="container  pb-[120px] pt-[50px]">
            <Description country={country} countryId={countryId} />
            <Food foodData={country.popularFood} />
            <Attractions data={isState && state ? state.attractions : country.attractions} />
            <CountriesSuggestions />
          </main>
        </>
      ) : (
        <main className="full-screen-height flex w-full items-center justify-center">
          <Spinner color={"success"} size={"xl"} />
        </main>
      )}
    </>
  );
}
