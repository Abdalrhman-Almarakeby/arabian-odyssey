import StarSVG from "@/assets/icons/star.svg?react";
import StarOutlineSVG from "@/assets/icons/star-outline.svg?react";

type RatingProps = {
  rating: number;
};

export function Rating({ rating }: RatingProps) {
  const ratingNum = Math.round(rating);
  console.log(ratingNum);
  const stars = Array.from({ length: 5 }).map((_, i) =>
    i < ratingNum ? (
      <StarSVG
        className="mr-1 w-[18px] fill-primary text-xl"
        key={i}
        role="img"
        aria-label={`${rating} out of 5 stars`}
      />
    ) : (
      <StarOutlineSVG
        className="mr-1 w-[18px] fill-primary text-xl"
        key={i}
        role="img"
        aria-label={`${rating} out of 5 stars`}
      />
    )
  );

  return (
    <div className="flex items-center">
      {stars}
      <span className="text-gray-600">{rating}</span>
    </div>
  );
}
