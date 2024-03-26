import { HashLink } from "react-router-hash-link";

type UnratedSlideCardProps = {
  image: string;
  locationName: string;
  to?: string;
};

export function UnratedSlideCard({ image, locationName, to }: UnratedSlideCardProps) {
  const card = (
    <>
      <figure className="group overflow-hidden rounded">
        <img
          src={image}
          alt=""
          className="rounded duration-500 motion-safe:group-hover:scale-105"
        />
      </figure>
      <h5 className="text-lg absolute bottom-5 left-2 rounded-md bg-black/40 px-2.5 py-1.5 font-bold text-white">
        {locationName}
      </h5>
    </>
  );
  return to ? (
    <HashLink to={to} className="relative">
      {card}
    </HashLink>
  ) : (
    <div className="relative">{card}</div>
  );
}
