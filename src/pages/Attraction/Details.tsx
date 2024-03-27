import AttractionSuggestions from "@/components/AttractionSuggestions";
import { Map } from "@/components/Map";
import { LatLngExpression } from "leaflet";

type DeatilsProps = {
  cords: LatLngExpression;
  location: string;
};

export function Details({ cords, location }: DeatilsProps) {
  return (
    <div className="w-full flex flex-col-reverse lg:flex-row gap-5">
      <div className="w-full">
        <AttractionSuggestions />
      </div>
      <div
        className={`size-[300px] sm:size-[400px] min-w-full lg:min-w-[450px] lg:size-[450px] bg-gray-200 rounded ${
          !cords && "flex items-center justify-center"
        }`}
      >
        {cords ? (
          <Map cords={cords} location={location} />
        ) : (
          <p className="text-red-500 text-center">
            Unable to display map <br />
            Cordinates aren't available currently.
          </p>
        )}
      </div>
    </div>
  );
}
