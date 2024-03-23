import LocationDotSVG from "@/assets/icons/location-dot.svg?react";

type SliderContentProps = {
  img: string;
  location: string;
};

export function SliderContent({ img, location }: SliderContentProps) {
  return (
    <div className="relative flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
      <div className="absolute right-0 top-0 z-10 flex h-full w-full flex-col items-center justify-center px-16 py-2">
        <h1 className="mb-8 text-center text-3xl font-bold text-white sm:text-4xl">
          Arabia: Beyond the Desert
        </h1>
        <p className="mb-4 text-center text-sm font-light text-white sm:text-base">
          Embark on a journey to explore the vibrant tapestry of the Arab world, where each step
          unveils treasures beyond the desert sands
        </p>
        <button className="rounded-[100px] bg-primary px-4 py-2 text-base font-bold text-white sm:text-xl">
          Explore now
        </button>
      </div>
      <div className="absolute bottom-10 right-0 z-10 mx-6 text-white">
        <LocationDotSVG className="mr-2 inline w-[15px] fill-white" />
        <p className="inline-block">{location}</p>
      </div>
      <figure className="right-0 top-0 h-full w-full">
        <div className="absolute left-0 top-0 h-full w-full bg-black opacity-20"></div>
        <img className="h-full w-full object-cover" src={img} alt="" />
      </figure>
    </div>
  );
}
