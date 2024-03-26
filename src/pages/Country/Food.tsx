import { Food } from "@/types/food";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/Carousel";
import AngleRightSVG from "@/assets/icons/angle-right.svg?react";
import AngleLeftSVG from "@/assets/icons/angle-left.svg?react";
import { NoData } from "@/components/NoData";
import { UnratedSlideCard } from "@/components/UnratedSlideCard";

type foodProps = {
  foodData: Food[];
};

export function Food({ foodData }: foodProps) {
  return (
    <section className="container mb-15 px-4">
      <h2 className="mb-6 text-2xl font-bold">Local food & Cuisine</h2>
      {foodData.length ? (
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full px-8"
        >
          <CarouselContent className="relative -ml-5">
            {foodData.map(({ image, name }) => (
              <CarouselItem key={name} className="pl-5 shadow-xl md:basis-1/2 lg:basis-1/3">
                <UnratedSlideCard locationName={name} image={image.path} />
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="absolute -left-[15px] top-1/2 grid size-[40px] -translate-y-1/2 place-items-center rounded-full border bg-white">
            <AngleLeftSVG className="w-[15px] fill-primary" />
          </CarouselPrevious>
          <CarouselNext className="absolute -right-[15px] top-1/2 grid size-[40px] -translate-y-1/2 place-items-center rounded-full border bg-white">
            <AngleRightSVG className="w-[15px] fill-primary" />
          </CarouselNext>
        </Carousel>
      ) : (
        <NoData />
      )}
    </section>
  );
}
