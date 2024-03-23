import { Link } from "react-router-dom";
import Review from "./Review";

interface AttractionProps {
  data: any;
}

function Attraction({ data }: AttractionProps) {
  return (
    <div className="flex flex-col md:flex-row items-center mb-20 md:mb-15">
      <figure className="max-w-full sm:max-w-[500px] rounded md:mr-10">
        <Link className="w-full" to={`/attractions/${data._id}`}>
          <img
            src={data.image.path}
            className="rounded-t md:rounded-b"
            alt=""
          />
        </Link>
      </figure>
      <div className="shadow-md px-6 pt-4 pb-8 w-full sm:max-w-[500px] md:max-w-none md:p-0 md:shadow-none">
        <h3 className="font-bold text-2xl mb-1">{data.name}</h3>
        <Review rating={data.rating} ratingCount={data.ratingCount} />
        <p className="text-base font-light max-w-[450px] mt-6 mb-4">
          {data.desc.length > 200
            ? `${data.desc.substring(0, 200)}...`
            : data.desc}
        </p>
        <Link
          className="bg-primary rounded-[100px] text-white px-4 py-2 text-xl hover:bg-secondary duration-300"
          to={`/attractions/${data._id}`}
        >
          Read more
        </Link>
      </div>
    </div>
  );
}

export default Attraction;
