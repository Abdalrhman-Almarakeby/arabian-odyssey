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
import Review from "@/components/Review";

type ReviewsProps = {
  reviews: review[];
};

function Reviews({ reviews }: ReviewsProps) {
  return (
    <div className="w-full min-h-[50svh] rounded py-8 px-5 bg-gray-200 flex flex-col items-center">
      <h2 className="font-bold text-xl mb-10">People's openion</h2>
      {reviews.length ? (
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full px-8"
        >
          <CarouselContent className="relative -ml-5">
            {reviews.map((review, i) => (
              <CarouselItem key={i}>
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
        <div className="flex w-full items-center justify-center h-full">
          <p className="text-sm">No reviews</p>
        </div>
      )}
    </div>
  );
}

export default Reviews;
