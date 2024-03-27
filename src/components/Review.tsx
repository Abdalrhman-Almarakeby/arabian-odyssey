import { review } from "@/types/Review";
import avatar from "@/assets/icons/user-avatar.svg";
import { Rating } from "./Rating";
type ReviewProps = {
  review: review;
};

function Review({ review }: ReviewProps) {
  return (
    <div className="bg-white rounded max-w-[350px] py-5 px-10 min-h-[300px]">
      <div className="flex gap-2 items-center">
        <figure>
          <img src={avatar} alt="" />
        </figure>
        <p>Username</p>
      </div>
      <Rating rating={review.rating} />
      <div className="mt-3">{review.comment}</div>
    </div>
  );
}

export default Review;
