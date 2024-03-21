import {SectionHeading} from "@/components/SectionHeading";

export function VisitArabiaSection() {
  return (
    <section className="container flex flex-col items-center justify-center gap-8 px-4 lg:gap-12">
      <SectionHeading>Why visit Arabia ?</SectionHeading>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        <div className="grid rounded-[0.625rem] bg-primary/10 p-5">
          <div className="mb-2.5 size-20 rounded-[0.625rem] bg-primary"></div>
          <h4 className="mb-4.5 text-lg font-bold text-black lg:text-xl">Reason Title</h4>
          <p className="font-light lg:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem.
          </p>
        </div>

        <div className="grid rounded-[0.625rem] bg-primary/10 p-5">
          <div className="mb-2.5 size-20 rounded-[0.625rem] bg-primary"></div>
          <h4 className="mb-4.5 text-lg font-bold text-black lg:text-xl">Reason Title</h4>
          <p className="font-light lg:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem.
          </p>
        </div>
        <div className="grid rounded-[0.625rem] bg-primary/10 p-5">
          <div className="mb-2.5 size-20 rounded-[0.625rem] bg-primary"></div>
          <h4 className="mb-4.5 text-lg font-bold text-black lg:text-xl">Reason Title</h4>
          <p className="font-light lg:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem.
          </p>
        </div>
      </div>
    </section>
  );
}
