import { Attraction } from "@/types/attraction";
import axios, { AxiosError, AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { About } from "./About";
import { Spinner } from "flowbite-react";
import { Details } from "./Details";
import { CountriesSuggestions } from "@/components/CountriesSuggestions";
import { Reviews } from "./Reviews";
import { RatingForm } from "./RatingForm";
import { useUser } from "@/contexts/UserContext";

export function Attraction() {
  const { attractionId } = useParams();
  const { user } = useUser();
  const [attraction, setAttraction] = useState<Attraction | null>(null);
  const [userDidComment, setUserDidComment] = useState(false);

  useEffect(() => {
    axios
      .get(`https://arabian-odyssey.vercel.app/attraction/${attractionId}`)
      .then((res: AxiosResponse) => res.data)
      .then((data: { attraction: Attraction }) => setAttraction(data.attraction))
      .catch((err: AxiosError) => console.log(err));
  }, [attractionId, userDidComment]);

  const userHasRated =
    attraction &&
    user &&
    attraction.Review.map((review) => review.user._id === user._id).includes(true);

  return (
    <div className="container relative px-6 pb-[100px] pt-10">
      {attraction ? (
        <>
          <section>
            <About attraction={attraction} />
          </section>
          <section className="mb-20">
            <Reviews reviews={attraction.Review} />
          </section>
          {((!userHasRated && !userDidComment) || !user) && (
            <section className="mb-20">
              <RatingForm
                attractionId={attraction._id}
                setUserDidComment={setUserDidComment}
                setAttraction={setAttraction}
              />
            </section>
          )}
          <section className="mb-20">
            <Details
              cords={attraction.locationCoordinates}
              location={`${attraction.state.name}, ${attraction.country.name}`}
            />
          </section>
          <section>
            <CountriesSuggestions />
          </section>
        </>
      ) : (
        <div className="flex h-[calc(100svh-64px)] items-center justify-center">
          <Spinner color="success" size={"xl"} />
        </div>
      )}
    </div>
  );
}
