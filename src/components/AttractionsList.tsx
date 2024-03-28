import { Attraction as AttractionType } from "@/types/attraction";
import { Attraction } from "./Attraction";

type AttractionsProps = {
  attractions: AttractionType[];
};

export function AttractionsList({ attractions }: AttractionsProps) {
  return (
    <div className="flex flex-col items-center">
      {attractions.map((attraction) => (
        <Attraction data={attraction} key={attraction._id} row={false} />
      ))}
    </div>
  );
}
