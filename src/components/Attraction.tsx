import { Attraction } from "@/types/attraction";
import { Link } from "react-router-dom";
import { Rating } from "./Rating";

type AttractionProps = {
  data: Attraction;
  row: boolean;
  setModal?: React.Dispatch<React.SetStateAction<boolean>> | false;
};

export function Attraction({ data, row, setModal = false }: AttractionProps) {
  function changeState() {
    if (setModal) {
      setModal(false);
    }
  }
  return (
    <div className={`mb-20 flex flex-col items-center ${!row && "md:mb-15 md:flex-row"}`}>
      {!row && (
        <figure className="max-w-full rounded sm:max-w-[500px] md:mr-10">
          <Link onClick={changeState} className="w-full" to={`/attraction/${data._id}`}>
            <img src={data.image.path} className="rounded-t md:rounded-b" alt="" />
          </Link>
        </figure>
      )}
      <div
        className={`w-full px-6 pb-8 pt-4 shadow-md ${
          !row && "sm:max-w-[500px] md:max-w-none md:p-0 md:shadow-none"
        }`}
      >
        <h3 className="mb-1 text-2xl font-bold">{data.name}</h3>
        <Rating rating={data.rating} />
        <p className="mb-4 mt-6 max-w-[450px] text-base font-light">
          {data.desc.length > 200 ? `${data.desc.substring(0, 200)}...` : data.desc}
        </p>
        <Link
          onClick={changeState}
          className="rounded-[100px] bg-primary px-4 py-2 text-xl text-white duration-300 hover:bg-secondary"
          to={`/attraction/${data._id}`}
        >
          Read more
        </Link>
      </div>
    </div>
  );
}
