import StarSVG from "@/assets/icons/star.svg?react";

type RatingProps = {
  rating: number;
};

export function Rating({ rating }: RatingProps) {
  return (
    <div className="flex items-center">
      {Array.from({ length: Math.round(rating) }).map((_, i) => (
        <StarSVG className="mr-1 w-[18px] fill-primary text-xl" key={i} />
      ))}
      <span className="text-gray-600">{rating}</span>
    </div>
  );
}
