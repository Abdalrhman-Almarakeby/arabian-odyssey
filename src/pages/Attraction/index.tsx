import { Attraction } from "@/types/attraction"
import axios, { AxiosError, AxiosResponse } from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export function Attraction() {
  const { attractionId } = useParams()
  const [attraction, SetAttraction] = useState<Attraction[]>([])
  useEffect(() => {
    axios.get(`https://arabian-odyssey.vercel.app/attraction/${attractionId}`)
    .then((res: AxiosResponse) => res.data)
    .then((data: {attraction: Attraction[]}) => SetAttraction(data.attraction))
    .catch((err: AxiosError) => console.log(err))
  }, [])
  return (
    <div>index</div>
  )
}