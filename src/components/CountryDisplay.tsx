import { Link } from "react-router-dom";

type CountryDisplayProps = {
  name: string;
  touristCount: number;
  flag: string;
  id: string;
};

function CountryDisplay({ name, touristCount, flag, id }: CountryDisplayProps) {
  return (
    <li className="flex items-center justify-center gap-4">
      <Link to={`/country/${id}`} className="flex flex-col items-center">
        <img src={flag} className="size-[70px] rounded-full bg-gray-500"></img>
        <div className="text-center">
          <p className="text-xl font-bold">{name}</p>
          <p className="font-light">{touristCount} Tourists</p>
        </div>
      </Link>
    </li>
  );
}

export default CountryDisplay;
