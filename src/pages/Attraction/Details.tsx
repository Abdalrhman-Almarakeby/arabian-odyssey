import { AttractionSuggestions } from "@/components/AttractionSuggestions";
import { Map } from "@/components/Map";
import { LatLngExpression } from "leaflet";

type DeatilsProps = {
  cords: LatLngExpression;
  location: string;
};

export function Details({ cords, location }: DeatilsProps) {
  return (
    <div className="flex w-full flex-col-reverse gap-20 lg:flex-row lg:gap-10">
      <AttractionSuggestions />
      <div
        className={`size-[300px] sm:size-[400px] min-w-full lg:min-w-0 lg:mt-14 lg:h-[500px] xl:h-[600px]  bg-gray-200 rounded ${
          !cords && "flex items-center justify-center"
        }`}
      >
        {Array.isArray(cords) && cords.length ? (
          <Map cords={cords} location={location} />
        ) : (
          <p className="text-center text-red-500">
            Unable to display map <br />
            Cordinates aren't available currently.
          </p>
        )}
      </div>
    </div>
  );
}
