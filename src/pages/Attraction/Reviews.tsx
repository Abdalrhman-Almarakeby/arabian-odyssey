import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/Carousel";
import { review } from "@/types/Review";
import AngleRightSVG from "@/assets/icons/angle-right.svg?react";
import AngleLeftSVG from "@/assets/icons/angle-left.svg?react";
import { Review } from "@/components/Review";

type ReviewsProps = {
  reviews: review[];
};

export function Reviews({ reviews }: ReviewsProps) {
  return (
    <div className="flex w-full flex-col items-center rounded bg-gray-100 px-5 py-8">
      <h2 className="mb-10 text-2xl font-bold">Visitor Reviews</h2>
      {reviews.length ? (
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full px-8"
        >
          <CarouselContent className="relative -ml-5">
            {reviews.map((review) => (
              <CarouselItem key={review.user.name} className="pl-5 md:basis-1/2 xl:basis-1/3">
                <Review review={review} />
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
        <div className="flex h-full w-full items-center justify-center">
          <p className="text-sm">No reviews</p>
        </div>
      )}
    </div>
  );
}
