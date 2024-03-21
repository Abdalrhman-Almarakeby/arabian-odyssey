import { SectionHeading } from "@/components/SectionHeading";

export function CategoriesSection() {
  return (
    <section className="container flex flex-col items-center justify-center gap-8 px-4 lg:gap-12">
      <SectionHeading>Browse By Category</SectionHeading>

      <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-4">
        <div className="flex flex-col items-center justify-center rounded-[0.625rem] bg-primary/10 px-14 py-3">
          <div className="mb-2.5 h-10 w-15 bg-primary"></div>
          <h4 className="mb-4.5 text-lg font-bold text-black lg:text-xl">Natural</h4>
        </div>
        <div className="flex flex-col items-center justify-center rounded-[0.625rem] bg-primary/10 px-14 py-3">
          <div className="mb-2.5 h-10 w-15 bg-primary"></div>
          <h4 className="mb-4.5 text-lg font-bold text-black lg:text-xl">Historical</h4>
        </div>
        <div className="flex flex-col items-center justify-center rounded-[0.625rem] bg-primary/10 px-14 py-3">
          <div className="mb-2.5 h-10 w-15 bg-primary"></div>
          <h4 className="mb-4.5 text-lg font-bold text-black lg:text-xl">Religious</h4>
        </div>
        <div className="flex flex-col items-center justify-center rounded-[0.625rem] bg-primary/10 px-14 py-3">
          <div className="mb-2.5 h-10 w-15 bg-primary"></div>
          <h4 className="mb-4.5 text-lg font-bold text-black lg:text-xl">Search</h4>
        </div>
      </div>
    </section>
  );
}
