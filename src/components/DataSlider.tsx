import { useEffect, useState } from "react";
import { Spinner } from "flowbite-react";
import axios from "axios";
import { ContentSlider } from "./ContentSlider";

type DataSliderProps = {
  path: string;
  isRated: boolean;
  field: string;
};

export function DataSlider({ path, isRated, field }: DataSliderProps) {
  const [data, setData] = useState(false);
  const [failure, setFailure] = useState(false);
  useEffect(() => {
    axios
      .get(`https://arabian-odyssey.vercel.app/${path}`)
      .then((res) => {
        setData(res.data[field]);
      })
      .catch(() => {
        setFailure(true);
      });
  }, [field, path]);
  return data ? (
    <ContentSlider isRated={isRated} data={data} />
  ) : failure ? (
    <p className="text-center text-base text-red-500">Unable to get data, try again later</p>
  ) : (
    <Spinner color="success" size={"xl"} />
  );
}
