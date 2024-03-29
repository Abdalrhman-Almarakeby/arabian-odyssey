import { review } from "@/types/review";
import AvatarSVG from "@/assets/icons/user-avatar.svg?react";
import { Rating } from "./Rating";

type ReviewProps = {
  review: review;
};

export function Review({ review }: ReviewProps) {
  return (
    <div
      className="flex h-full flex-col gap-4 rounded-lg bg-white px-4 py-5"
      aria-label={`Review by ${review.user.name}`}
    >
      <div className="flex items-center gap-2">
        {review.user.image ? (
          <figure>
            <img src={review.user.image.path} alt="" className="size-[50px] rounded-full" />
          </figure>
        ) : (
          <AvatarSVG className="size-[50px] fill-primary" />
        )}
        <p className="capitalize"> {review.user.name}</p>
      </div>
      <div className="mb-4">{review.comment}</div>
      <div className="mt-auto flex justify-between px-2">
        <Rating rating={+review.rating} review />
        <p>{review.date ?? "Feb 13, 2021"}</p>
      </div>
    </div>
  );
}
