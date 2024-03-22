import CountryDisplay from "@/components/CountryDisplay";
import { SectionHeading } from "@/components/SectionHeading";
import axios from "axios";
import { Spinner } from "flowbite-react";
import { useEffect, useState } from "react";

export default function MostVisitedSection() {
  const [countries, setCountries] = useState(false);
  useEffect(() => {
    axios.get("https://arabian-odyssey.vercel.app/country/home").then((res) => {
      setCountries(res.data.country);
    });
  }, []);
  return (
    <section className="container flex flex-col items-center justify-center gap-8 px-4 lg:gap-12">
      <SectionHeading>Most Visited</SectionHeading>

      <ol className="grid grid-cols-1 min-450:grid-cols-2 md:grid-cols-3 gap-10 gap-x-4 w-full items-center justify-center">
        {countries.length ? (
          countries.map((country: any) => (
            <CountryDisplay
              name={country.name}
              touristCount={country.numoftourist}
              flag={country.flag.path}
              id={country._id}
            />
          ))
        ) : (
          <Spinner color="success" size={"xl"} />
        )}
      </ol>
    </section>
  );
}
