import SectionHeading from "@/components/SectionHeading";
import temp from "@/assets/temp.jpg";

export default function TopDestinationsSection() {
  return (
    <section className="container flex flex-col items-center justify-center gap-8 px-4 lg:gap-12">
      <SectionHeading>Top Destinations</SectionHeading>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        <div className="relative">
          <img src={temp} alt="" className="rounded-[0.625rem]" />
          <h5 className="absolute bottom-7 left-4 text-xl font-bold text-white">Location Name</h5>
        </div>
        <div className="relative">
          <img src={temp} alt="" className="rounded-[0.625rem]" />
          <h5 className="absolute bottom-7 left-4 text-xl font-bold text-white">Location Name</h5>
        </div>
        <div className="relative">
          <img src={temp} alt="" className="rounded-[0.625rem]" />
          <h5 className="absolute bottom-7 left-4 text-xl font-bold text-white">Location Name</h5>
        </div>
      </div>
    </section>
  );
}
