import { Food } from "@/types/food";
import { ContentSlider } from "@/components/ContentSlider";
import { NoData } from "@/components/NoData";

type foodProps = {
  foodData: Food[];
};

export function Food({ foodData }: foodProps) {
  return (
    <section className="mb-15">
      <h2 className="mb-6 text-2xl font-bold">Local food & Cuisine</h2>
      {foodData.length ? (
        <ContentSlider data={foodData} isRated={false} linkTo="/food" />
      ) : (
        <NoData />
      )}
    </section>
  );
}
