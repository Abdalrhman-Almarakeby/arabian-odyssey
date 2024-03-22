import axios from 'axios';
import { useEffect, useState } from 'react'
import ContentSlider from './ContentSlider';
import { Spinner } from 'flowbite-react';

interface DataSliderProps {
    path: string,
    isRated: boolean,
    field: string
}

function DataSlider({ path, isRated, field }: DataSliderProps) {
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
    }, []);
  return (
    data ? (
        <ContentSlider isRated={isRated} data={data} />
      ) : failure ? (
        <p className="text-red-500 text-center text-base">
          Unable to get data, try again later
        </p>
      ) : (
        <Spinner color="success" size={"xl"} />
      )
  )
}

export default DataSlider