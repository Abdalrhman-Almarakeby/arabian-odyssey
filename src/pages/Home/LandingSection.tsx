import { Carousel, CarouselContent, CarouselItem } from "@/components/Carousel";
import Autoplay from "embla-carousel-autoplay";
import homeImg1 from "@/assets/imgs/slider1.webp";
import homeImg2 from "@/assets/imgs/slider2.webp";
import homeImg3 from "@/assets/imgs/slider3.webp";
import LocationDotSVG from "@/assets/icons/location-dot.svg?react";

export function LandingSection() {
  const LOCATIONS = [
    { img: homeImg1, location: "Sir Al Dannieyh, Lebanon" },
    { img: homeImg2, location: "Ain Draham, Tunisia" },
    { img: homeImg3, location: "Sahara, Morocco" },
  ];

  return (
    <section className="full-screen-height relative">
      <div className="relative flex h-full items-center justify-center bg-gray-400">
        <Carousel
          opts={{ loop: true, duration: 50 }}
          className="h-full"
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
        >
          <CarouselContent className="h-full">
            {LOCATIONS.map(({ img, location }) => (
              <CarouselItem key={img} className="relative h-full w-full bg-black/30">
                <div className="absolute bottom-10 right-0 z-10 mx-6 text-white">
                  <LocationDotSVG className="mr-2 inline w-[15px] fill-white" />
                  <p className="inline-block">{location}</p>
                </div>
                <img className="h-full w-full object-cover brightness-[0.60]" src={img} alt="" />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="absolute right-0 flex h-full w-full flex-col items-center justify-center px-16 py-2">
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
      </div>
    </section>
  );
}
