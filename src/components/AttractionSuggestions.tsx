import { Attraction } from "@/types/attraction";
import axios, { AxiosResponse } from "axios";
import { Spinner } from "flowbite-react";
import { useEffect, useState } from "react";
import { Rating } from "./Rating";
import { HashLink } from "react-router-hash-link";

export function AttractionSuggestions() {
  const [attractions, setAttractions] = useState<Attraction[]>([]);

  useEffect(() => {
    axios
      .get(`https://arabian-odyssey.vercel.app/attraction`)
      .then((res: AxiosResponse) => res.data)
      .then((data: { attraction: Attraction[] }) => setAttractions(data.attraction))
      .catch((err) => console.log(err));
  }, []);

  // Just to the number of attractions that will be displayed in the page get to 6
  // will be remove when we add more than 6 attractions
  attractions.push(attractions[0]);
  console.log(attractions);
  return (
    <div className="w-full">
      <div className="mb-6 flex items-center">
        <h2 className="mr-2 whitespace-nowrap text-2xl font-bold">Attractions Nearby</h2>
        <span className="mt-1 h-[2px] w-full bg-primary"></span>
      </div>
      {attractions.length ? (
        <div className="gird-cols-1 grid w-full gap-x-4 gap-y-6 sm:grid-cols-2 xl:grid-cols-3">
          {attractions.slice(0, 6).map((item) => (
            <div key={item._id} className="flex flex-col gap-4 shadow-lg">
              <img src={item.image.path} className="rounded" alt="" />
              <div className="flex items-center justify-between gap-2 px-3">
                <div className="mb-3">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <Rating rating={item.rating} />
                </div>
                <HashLink
                  to={`/attraction/${item._id}#`}
                  className="rounded bg-primary px-2 py-1 text-base text-white duration-300 hover:bg-secondary"
                >
                  Read More
                </HashLink>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid place-items-center">
          <Spinner color="success" size={"xl"} />
        </div>
      )}
    </div>
  );
}
