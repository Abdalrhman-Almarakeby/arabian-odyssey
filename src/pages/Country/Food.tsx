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
    <section className="container mb-15">
      <div className="mb-6 flex items-center">
        <h2 className="mr-2 whitespace-nowrap text-2xl font-bold">Local food & Cuisine</h2>
        <span className="mt-1 h-[2px] w-full bg-primary"></span>
      </div>
      {foodData.length ? (
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full px-8"
        >
          <CarouselContent className="relative -ml-5">
            {foodData.map(({ image, name }) => (
              <CarouselItem key={name} className="pl-5 shadow-xl sm:basis-1/2 lg:basis-1/3">
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
