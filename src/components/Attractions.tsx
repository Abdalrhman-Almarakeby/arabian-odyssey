import { Attraction } from "@/types/attraction";
import { AttractionsList } from "@/components/AttractionsList";
import { NoData } from "@/components/NoData";

type AttractionsProps = {
  data: Attraction[];
};

export function Attractions({ data }: AttractionsProps) {
  return (
    <section className="mb-15">
      <div className="mb-6 flex items-center">
        <h2 className="mr-2 text-2xl font-bold">Attractions</h2>
        <span className="mt-1 h-[2px] w-full bg-primary"></span>
      </div>
      {data.length ? <AttractionsList attractions={data} /> : <NoData />}
    </section>
  );
}
