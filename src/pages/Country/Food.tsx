import ContentSlider from "@/components/ContentSlider";

interface foodProps {
  foodData: [any];
}

function Food({ foodData }: foodProps) {
  return (
    <section className="mb-15">
      <h2 className="font-bold text-2xl mb-6">Local food & Cuisine</h2>
      <ContentSlider data={foodData} isRated={false} />
    </section>
  );
}

export default Food;
