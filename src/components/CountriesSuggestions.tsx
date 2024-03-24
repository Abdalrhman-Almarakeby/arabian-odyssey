import { DataSlider } from "@/components/DataSlider";

export function CountriesSuggestions() {
  return (
    <section>
      <div className="mb-6 flex items-center gap-2">
        <h2 className="whitespace-nowrap text-2xl font-bold">Other Countries</h2>
        <span className="mt-1 h-[2px] w-full bg-primary"></span>
      </div>
      <DataSlider path={"country"} field={"country"} linkTo={"/country"} isRated={false} />
    </section>
  );
}
