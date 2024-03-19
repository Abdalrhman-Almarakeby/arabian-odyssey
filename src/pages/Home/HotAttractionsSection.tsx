import SectionHeading from "@/components/SectionHeading";
import x from "@/assets/temp.jpg";

import LocationCard from "./LocationCard";

export default function HotAttractionsSection() {
  return (
    <section className="container flex flex-col items-center justify-center gap-8 px-4 lg:gap-12">
      <SectionHeading>Hot Attractions</SectionHeading>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        <LocationCard rating={5} ratingCount={1000} image={x} locationName="Location 1" />
        <LocationCard rating={5} ratingCount={1000} image={x} locationName="Location 1" />
        <LocationCard rating={5} ratingCount={1000} image={x} locationName="Location 1" />
      </div>
    </section>
  );
}
