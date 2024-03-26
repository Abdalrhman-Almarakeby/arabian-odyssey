import { Carousel, CarouselContent, CarouselItem } from "@/components/Carousel";
import Autoplay from "embla-carousel-autoplay";

type WallpaperProps = {
  images: { path: string }[];
  flag: string;
  name: string;
};

export function Wallpaper({ images, flag, name }: WallpaperProps) {
  return (
    <header className="full-screen-height">
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
            {images.map(({ path }) => (
              <CarouselItem key={path} className="relative h-full w-full bg-black/30">
                <img className="h-full w-full object-cover" src={path} alt="" />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="absolute bottom-6 left-4 z-10 flex items-center">
          <figure className="mr-3 rounded-full">
            <img src={flag} className="size-[50px] rounded-full" alt="" />
          </figure>
          <h1 className="rounded-md bg-black/40 px-2.5 py-1.5 text-xl font-bold text-white">
            {name}
          </h1>
        </div>
      </div>
    </header>
  );
}
