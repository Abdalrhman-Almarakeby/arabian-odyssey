import { DataSlider } from "@/components/DataSlider";

export function CountriesSuggestions() {
  return (
    <section>
      <div className="mb-6 flex items-center">
        <h2 className="mr-2 text-2xl font-bold">Other</h2>
        <span className="mt-1 h-[2px] w-full bg-primary"></span>
      </div>
      <DataSlider path={"country"} field={"country"} isRated={false} />
    </section>
  );
}
