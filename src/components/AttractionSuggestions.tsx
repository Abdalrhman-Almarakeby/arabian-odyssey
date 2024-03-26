import { Attraction } from "@/types/attraction";
import axios, { AxiosResponse } from "axios";
import { Spinner } from "flowbite-react";
import { useEffect, useState } from "react";
import { Rating } from "./Rating";
import { Link } from "react-router-dom";

function AttractionSuggestions() {
  const [attractions, setAttractions] = useState<Attraction[]>([]);
  useEffect(() => {
    axios
      .get(`https://arabian-odyssey.vercel.app/attraction`)
      .then((res: AxiosResponse) => res.data)
      .then((data: { attraction: Attraction[] }) =>
        setAttractions(data.attraction)
      )
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h2 className="font-bold text-xl mb-4">More attractions</h2>
      <div className="flex items-center">
        {attractions.length ? (
          <div className="grid gird-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 w-full gap-x-4 gap-y-6">
            {attractions.slice(0, 6).map((item, i) => (
              <div
                key={i}
                className="flex gap-4 items-center flex-col sm:flex-row md:flex-col lg:flex-row"
              >
                <Link to={`/attraction/${item._id}`}>
                  <figure>
                    <img src={item.image.path} className="rounded" alt="" />
                  </figure>
                </Link>
                <div>
                  <div className="mb-3">
                    <h3>{item.name}</h3>
                    <Rating rating={item.rating} />
                  </div>
                  <Link
                    to={`/attraction/${item._id}`}
                    className="bg-primary hover:bg-secondary duration-300 rounded py-1 px-2 text-white text-base"
                  >
                    More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <Spinner size={"xl"} color={"success"} />
        )}
      </div>
    </div>
  );
}

export default AttractionSuggestions;
