import { review } from "@/types/review";
import avatar from "@/assets/icons/user-avatar.svg";
import { Rating } from "./Rating";

type ReviewProps = {
  review: review;
};

export function Review({ review }: ReviewProps) {
  return (
    <div className="min-h-[300px] max-w-[350px] rounded bg-white px-10 py-5">
      <div className="flex items-center gap-2">
        <figure>
          <img src={avatar} alt="" />
        </figure>
        <p>Username</p>
      </div>
      <Rating rating={+review.rating} />
      <div className="mt-3">{review.comment}</div>
    </div>
  );
}
