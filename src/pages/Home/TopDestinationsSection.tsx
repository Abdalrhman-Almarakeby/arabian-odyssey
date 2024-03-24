import { SectionHeading } from "@/components/SectionHeading";
import { DataSlider } from "@/components/DataSlider";

export function TopDestinationsSection() {
  return (
    <section className="container flex flex-col items-center justify-center gap-8 px-4 lg:gap-12">
      <SectionHeading>Top Destinations</SectionHeading>
      <DataSlider
        path={"state"}
        field={"state"}
        isRated={false}
        linkTo={"/country/:country"}
      />
    </section>
  );
}
