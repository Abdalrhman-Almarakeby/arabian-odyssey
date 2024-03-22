import { SectionHeading } from "@/components/SectionHeading";
import { DataSlider } from "@/components/DataSlider";

export function HotAttractionsSection() {
  return (
    <section className="container flex flex-col items-center justify-center gap-8 px-4 lg:gap-12">
      <SectionHeading>Hot Attractions</SectionHeading>
      <DataSlider path={"attraction"} field={"attraction"} isRated={true} />
    </section>
  );
}
