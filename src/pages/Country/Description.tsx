import BtnsLine from "@/components/BtnsLine";
import { Badge } from "flowbite-react";

interface DescriptionProps {
  country: any;
  countryId: string | undefined;
}

function Description({ country, countryId }: DescriptionProps) {
  return (
    <section className="mb-15 border-b-primary border-b-2 pb-10">
      <BtnsLine
        btns={country.states}
        base={`/country/${countryId}`}
        baseBtn={"About"}
      />
      <div className="mt-12">
        <h2 className="font-bold text-2xl mb-6">About</h2>
        <p className="max-w-[500px]">{country.desc}</p>
        <div className="mt-3 flex flex-wrap gap-2 max-w-[400px]">
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

export default Description;
