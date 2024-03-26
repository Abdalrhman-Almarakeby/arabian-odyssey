import { Attraction } from "@/types/attraction";
import axios, { AxiosError, AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { About } from "./About";
import { Spinner } from "flowbite-react";
import { Details } from "./Details";
import { CountriesSuggestions } from "@/components/CountriesSuggestions";

export function Attraction() {
  const { attractionId } = useParams();
  const [attraction, SetAttraction] = useState<Attraction | null>(null);
  useEffect(() => {
    axios
      .get(`https://arabian-odyssey.vercel.app/attraction/${attractionId}`)
      .then((res: AxiosResponse) => res.data)
      .then((data: { attraction: Attraction }) =>
        SetAttraction(data.attraction)
      )
      .catch((err: AxiosError) => console.log(err));
  }, []);
  console.log(attraction);
  return (
    <div className="container px-6 pt-10 pb-[100px]">
      {attraction ? (
        <>
          <section>
            <About attraction={attraction} />
          </section>
          <section className="mb-20">
            <Details />
          </section>
          <section>
            <CountriesSuggestions />
          </section>
        </>
      ) : (
        <div className="flex justify-center items-center h-[calc(100svh-64px)]">
          <Spinner color="success" size={"xl"} />
        </div>
      )}
    </div>
  );
}
