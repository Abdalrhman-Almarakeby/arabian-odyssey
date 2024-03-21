import StarSVG from "@/assets/icons/star.svg?react";

type LocationCardProps = {
  image: string;
  locationName: string;
  rating: 1 | 2 | 3 | 4 | 5;
  ratingCount: number;
};

export default function LocationCard({
  image,
  locationName,
  rating,
  ratingCount,
}: LocationCardProps) {
  return (
    <div className="grid gap-3.5">
      <img src={image} alt="" className="rounded-[0.625rem]" />
      <div className="px-4">
        <h4 className="text-xl font-bold text-black">{locationName}</h4>
        <div className="flex items-center">
          {Array.from({ length: rating }).map((_, i) => (
            <StarSVG key={i} />
          ))}

          {ratingCount}
        </div>
      </div>
    </div>
  );
}
