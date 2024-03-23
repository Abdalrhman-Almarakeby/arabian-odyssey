import { Food } from "@/types/food";
import { ContentSlider } from "@/components/ContentSlider";

type foodProps = {
  foodData: Food[];
};

export function Food({ foodData }: foodProps) {
  console.log(foodData);
  return (
    <section className="mb-15">
      <h2 className="mb-6 text-2xl font-bold">Local food & Cuisine</h2>
      <ContentSlider data={foodData} isRated={false} />
    </section>
  );
}
