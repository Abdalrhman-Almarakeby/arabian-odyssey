import { useEffect, useState } from "react";
import { Spinner } from "flowbite-react";
import axios from "axios";
import { ContentSlider } from "./ContentSlider";

type DataSliderProps = {
  path: string;
  isRated: boolean;
  field: string;
  linkTo: string
};

export function DataSlider({ path, isRated, field, linkTo }: DataSliderProps) {
  const [data, setData] = useState<{ name: string; images: {path: string}[]; country: string; image: { path: string }; rating?: number; _id: string }[]>(
    []
  );
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(`https://arabian-odyssey.vercel.app/${path}`)
      .then((res) => setData(res.data[field]))
      .catch(() => setError(true));
  }, [field, path]);

  return (
    <>
      {data && <ContentSlider isRated={isRated} data={data} linkTo={linkTo} />}
      {error && (
        <p className="text-center text-base text-red-500">Unable to get data, try again later</p>
      )}
      {!error && !data && <Spinner color="success" size={"xl"} />}
    </>
  );
}
