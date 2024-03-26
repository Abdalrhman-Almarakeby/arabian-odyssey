import AttractionSuggestions from "@/components/AttractionSuggestions";
import { Map } from "@/components/Map";

export function Details() {
  return (
    <div className="w-full flex flex-col-reverse lg:flex-row gap-5">
      <div className="w-full">
        <AttractionSuggestions />
      </div>
      <div className="size-[300px] sm:size-[400px] min-w-full lg:min-w-[450px] lg:size-[450px]">
        <Map cords={[36.8065, 10.1815]} location="location, location" />
      </div>
    </div>
  );
}
