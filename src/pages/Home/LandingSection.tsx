import homeImg from "@/assets/imgs/home.webp";
import { HashLink } from "react-router-hash-link";

export default function LandingSection() {
  return (
    <section className="relative grid place-items-center">
      <img src={homeImg} alt="" className="h-[calc(100svh-64px)] w-full object-cover" />
      <div className="container absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center px-4 text-center text-white">
        <h1 className="mb-6 text-2xl font-bold lg:mb-7.5 lg:text-4xl">Arabia Beyond the Desert</h1>
        <h2 className="mb-3 lg:mb-3.5 lg:text-lg">
          Embark on a journey to explore the vibrant tapestry of the Arab world, where each step
          unveils treasures beyond the desert sands
        </h2>
        {/* // TODO: Update the link */}
        <HashLink
          to="/"
          className="rounded-full bg-primary px-4 py-2 text-lg font-bold text-white md:px-6 lg:px-8 lg:py-3 lg:text-xl"
        >
          Explore Now
        </HashLink>
      </div>
    </section>
  );
}
