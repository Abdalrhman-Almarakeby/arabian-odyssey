import { useEffect, useState } from "react";
import axios from "axios";
import { Spinner } from "flowbite-react";
import { Country } from "@/types/country";
import { SectionHeading } from "@/components/SectionHeading";
import { CountryDisplay } from "@/components/CountryDisplay";

export function MostVisitedSection() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://arabian-odyssey.vercel.app/country/home")
      .then((res) => setCountries(res.data.country))
      .catch((err) => setError(err));
  }, []);

  return (
    <section className="container flex flex-col items-center justify-center gap-8 px-4 lg:gap-12">
      <SectionHeading>Most Visited</SectionHeading>

      {countries.length > 0 && (
        <ol className="grid w-full grid-cols-1 items-center justify-center gap-10 gap-x-4 min-450:grid-cols-2 md:grid-cols-3">
          {countries.map((country) => (
            <CountryDisplay
              key={country.name}
              name={country.name}
              touristCount={country.numoftourist}
              flag={country.flag.path}
              id={country.id}
            />
          ))}
        </ol>
      )}

      {error && !countries.length && (
        <p className="text-center text-base text-red-500">Unable to get data, try again later</p>
      )}
      {!error && !countries.length && (
        <div className="grid place-items-center">
          <Spinner color="success" size={"xl"} />
        </div>
      )}
    </section>
  );
}
