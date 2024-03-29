import StarSVG from "@/assets/icons/star.svg?react";
import StarOutlineSVG from "@/assets/icons/star-outline.svg?react";

type RatingProps = {
  rating: number;
  review?: true | undefined;
};

export function Rating({ rating, review }: RatingProps) {
  const ratingNum = Math.round(rating);

  const stars = review
    ? Array.from({ length: 5 }).map((_, i) =>
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
      )
    : Array.from({ length: rating }).map((_, i) => (
        <StarSVG
          className="mr-1 w-[18px] fill-primary text-xl"
          key={i}
          role="img"
          aria-label={`${rating} out of 5 stars`}
        />
      ));

  return (
    <div className="flex items-center">
      {stars}
      <span className="text-gray-600">{rating}</span>
    </div>
  );
}
