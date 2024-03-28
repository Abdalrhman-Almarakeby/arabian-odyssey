import { Attraction } from "@/types/attraction";
import { AttractionsList } from "@/components/AttractionsList";
import { NoData } from "@/components/NoData";
import { CountryData } from "@/types/country";
import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

type AttractionsProps = {
  data: Attraction[];
  country?: CountryData;
};

export function Attractions({ data, country }: AttractionsProps) {
  const { pathname } = useLocation();

  return (
    <section className="mb-15">
      <div className="mb-6 flex items-center">
        <h2 className="mr-2 text-2xl font-bold">Attractions</h2>
        <span className="mt-1 h-[2px] w-full bg-primary"></span>
      </div>
      {country && country.states.length > 1 && country.attractions.length > 0 && (
        <div className="flex w-full flex-wrap items-center justify-center gap-2 py-2 pb-10">
          <HashLink
            className={`border-2 border-black rounded-[100px] py-1 px-3 mr-3 ${
              pathname === `/country/${country.id}`
                ? "text-white bg-black"
                : "hover:bg-gray-400 hover:text-white"
            }`}
            to={`/country/${country.id}`}
          >
            All
          </HashLink>
          {country.states.map(({ name, id }) => {
            const targetPath = `/country/${country.id}/${id}`;
            return (
              <HashLink
                key={id}
                className={`border-2 border-black rounded-[100px] py-1 px-3 mr-3 ${
                  pathname.includes(targetPath)
                    ? "text-white bg-black"
                    : "hover:bg-gray-400 hover:text-white"
                }`}
                to={targetPath}
              >
                {name}
              </HashLink>
            );
          })}
        </div>
      )}
      {data.length ? <AttractionsList attractions={data} /> : <NoData />}
    </section>
  );
}
