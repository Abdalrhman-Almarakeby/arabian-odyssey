import { Badge } from "flowbite-react";
import { BtnsLine } from "@/components/BtnsLine";
import { CountryData } from "@/types/country";

type DescriptionProps = {
  country: CountryData;
  countryId: string | undefined;
};

export function Description({ country, countryId }: DescriptionProps) {
  return (
    <section className="mb-15 border-b-2 border-b-primary pb-10">
      <BtnsLine states={country.states} base={`/country/${countryId}`} baseBtn={"About"} />
      <div className="mt-12">
        <h2 className="mb-6 text-2xl font-bold">About</h2>
        <p className="max-w-[500px]">{country.desc}</p>
        <div className="mt-3 flex max-w-[400px] flex-wrap gap-2">
          <Badge color={"success"}>Capital: {country.capital}</Badge>
          <Badge color={"success"}>{country.numoftourist} tourists</Badge>
          {country.languages.map((lang: string, i: number) => (
            <Badge color={"success"} key={i}>
              {lang}
            </Badge>
          ))}
          <Badge color={"success"}>Best during {country.bestTimeToVisit}</Badge>
        </div>
      </div>
    </section>
  );
}
