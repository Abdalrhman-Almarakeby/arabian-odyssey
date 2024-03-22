import { useEffect, useState } from "react";
import { Spinner } from "flowbite-react";
import axios from "axios";
import { Attraction } from "@/types/attraction";
import { ContentSlider } from "./ContentSlider";

type DataSliderProps = {
  path: string;
  isRated: boolean;
  field: string;
};

export function DataSlider({ path, isRated, field }: DataSliderProps) {
  const [data, setData] = useState<Attraction[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(`https://arabian-odyssey.vercel.app/${path}`)
      .then((res) => setData(res.data[field]))
      .catch(() => setError(true));
  }, [field, path]);

  return (
    <>
      {data && <ContentSlider isRated={isRated} data={data} />}
      {error && (
        <p className="text-center text-base text-red-500">Unable to get data, try again later</p>
      )}
      {!error && !data && <Spinner color="success" size={"xl"} />}
    </>
  );
}
