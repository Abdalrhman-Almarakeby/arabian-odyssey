import StarSVG from "@/assets/icons/star.svg?react";

type ReviewProps = {
  rating: number;
};

export function Review({ rating }: ReviewProps) {
  return (
    <div className="flex items-center">
      {Array.from({ length: Math.round(rating) }).map((_, i) => (
        <StarSVG className="mr-1 w-[18px] fill-primary text-xl" key={i} />
      ))}
      <span className="text-gray-600">{rating}</span>
    </div>
  );
}
