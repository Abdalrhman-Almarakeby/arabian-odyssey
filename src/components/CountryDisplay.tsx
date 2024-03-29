import { HashLink } from "react-router-hash-link";

type CountryDisplayProps = {
  name: string;
  touristCount: string;
  flag: string;
  id: string;
};

export function CountryDisplay({ name, touristCount, flag, id }: CountryDisplayProps) {
  return (
    <li className="flex items-center justify-center gap-4">
      <HashLink to={`/country/${id}#`} className="flex flex-col items-center">
        <img src={flag} className="size-[70px] rounded-full bg-gray-500"></img>
        <div className="text-center">
          <p className="text-xl font-bold">{name}</p>
          <p className="font-light">{touristCount} Tourists</p>
        </div>
      </HashLink>
    </li>
  );
}
