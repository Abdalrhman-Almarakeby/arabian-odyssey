import Wallpaper from "@/components/Wallpaper";
import axios from "axios";
import { Spinner } from "flowbite-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Description from "./Description";
import Food from "./Food";
import Attractions from "./Attractions";
import CountriesSuggestions from "./CountriesSuggestions";

function index() {
  const { countryId } = useParams();
  const [country, setCountry]: any = useState(false);
  useEffect(() => {
    axios
      .get(`https://arabian-odyssey.vercel.app/country/${countryId}`)
      .then((countryData) => {
        console.log(countryData.data.country);
        setCountry(countryData.data.country);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      {country ? (
        <>
          <header className="h-[calc(100svh-64px)]">
            <Wallpaper
              name={country.name}
              flag={country.flag.path}
              images={country.images}
            />
          </header>
          <main className="pt-[50px] pb-[120px] px-6">
            <Description country={country} countryId={countryId} />
            <Food foodData={country.popularFood} />
            <Attractions data={country.attractions} />
            <CountriesSuggestions />
          </main>
        </>
      ) : (
        <main className="w-full h-[calc(100svh-64px)] flex items-center justify-center">
          <Spinner color={"success"} size={"xl"} />
        </main>
      )}
    </>
  );
}

export default index;
