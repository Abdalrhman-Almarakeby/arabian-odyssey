import { Attraction } from "@/types/attraction";
import { Link } from "react-router-dom";
import { Rating } from "./Rating";

type AttractionProps = {
  data: Attraction;
};

export function Attraction({ data }: AttractionProps) {
  return (
    <div className="mb-20 flex flex-col items-center md:mb-15 md:flex-row">
      <figure className="max-w-full rounded sm:max-w-[500px] md:mr-10">
        <Link className="w-full" to={`/attractions/${data._id}`}>
          <img src={data.image.path} className="rounded-t md:rounded-b" alt="" />
        </Link>
      </figure>
      <div className="w-full px-6 pb-8 pt-4 shadow-md sm:max-w-[500px] md:max-w-none md:p-0 md:shadow-none">
        <h3 className="mb-1 text-2xl font-bold">{data.name}</h3>
        <Rating rating={data.rating} />
        <p className="mb-4 mt-6 max-w-[450px] text-base font-light">
          {data.desc.length > 200 ? `${data.desc.substring(0, 200)}...` : data.desc}
        </p>
        <Link
          className="rounded-[100px] bg-primary px-4 py-2 text-xl text-white duration-300 hover:bg-secondary"
          to={`/attractions/${data._id}`}
        >
          Read more
        </Link>
      </div>
    </div>
  );
}
