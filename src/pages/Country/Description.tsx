import { Badge } from "flowbite-react";
import { CountryData } from "@/types/Country";

type DescriptionProps = {
  country: CountryData;
};

export function Description({ country }: DescriptionProps) {
  return (
    <section className="mb-15">
      <h2 className="mb-6 text-3xl font-bold">About</h2>
      <p className="mb-5">{country.desc}</p>
      <div className="flex flex-wrap gap-2">
        <Badge color={"success"}>Capital: {country.capital}</Badge>
        <Badge color={"success"}>{country.numoftourist} tourists</Badge>
        {country.languages.map((lang) => (
          <Badge color={"success"} key={lang}>
            {lang}
          </Badge>
        ))}
        <Badge color={"success"}>Best during {country.bestTimeToVisit}</Badge>
      </div>
    </section>
  );
}
