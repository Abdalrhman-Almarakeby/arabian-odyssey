import { useState } from "react";
import axios, { AxiosResponse } from "axios";
import StarSVG from "@/assets/icons/star.svg?react";
import { useLocalStorageToken } from "@/contexts/LocalStorageTokenContext";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { Loading } from "@/components/Loading";
import CommentSVG from "@/assets/icons/comment-dots.svg?react";
import { Attraction } from "@/types/attraction";

type RatingFormProps = {
  attractionId: string;
  setUserDidComment: React.Dispatch<React.SetStateAction<boolean>>;
  setAttraction: React.Dispatch<React.SetStateAction<Attraction | null>>;
};

export function RatingForm({ attractionId, setUserDidComment, setAttraction }: RatingFormProps) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const { token } = useLocalStorageToken();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!token) {
      toast.error(
        <>
          Please
          <>&nbsp;</>
          <Link to="/signin" className="underline">
            Sign in
          </Link>
          <>&nbsp;</>
          to submit a rating
        </>
      );
      return;
    }

    setLoading(true);
    setComment("");
    setRating(0);

    axios
      .post(
        `https://arabian-odyssey.vercel.app/review/${attractionId}`,
        { rating, comment },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            token: `ArabianOdyssey__${token}`,
          },
        }
      )
      .then((res: AxiosResponse) => res.data)
      .then((data) => {
        if (!(data.message === "success"))
          toast.error(data.message ?? "Sorry, something went wrong. Please try again.");
        console.log(data);

        setAttraction((prev) => {
          if (!prev) return prev;
          return {
            ...prev,
            Review: [...prev.Review, data.review],
          };
        });

        setUserDidComment(true);
        toast.success("Rating submitted successfully");
      })
      .finally(() => setLoading(false));
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-[700px] flex-col gap-4 rounded px-5 py-8 lg:px-0"
    >
      {loading && <Loading />}
      <h3 className="flex items-center gap-2 text-2xl font-bold">
        Give A Rating <CommentSVG className="mt-2 size-[20px] fill-primary" />
      </h3>
      <div className="space-y-2">
        <label htmlFor="">Rating</label>{" "}
        <div className="flex flex-row-reverse items-center justify-end">
          {[...Array(5)].map((_, i) => (
            <>
              <input
                type="radio"
                className="peer -ms-5 size-5 cursor-pointer appearance-none border-0 bg-transparent text-transparent checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0"
                name="rating"
                value="1"
                checked={rating === i + 1}
                onChange={() => setRating(i + 1)}
                required
              />
              <label
                htmlFor="hs-ratings-readonly-1"
                className="pointer-events-none fill-gray-300 peer-checked:fill-primary"
              >
                <StarSVG className="size-[20px]" />
              </label>
            </>
          ))}
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="comment">Comment</label>
        <textarea
          id="comment"
          name="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="block h-20 w-full rounded-md border border-gray-300 bg-gray-50 p-2.5 px-3 py-2 text-sm text-black ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          required
        ></textarea>
      </div>
      <button
        className="rounded-[100px] bg-primary px-4 py-2 text-base font-bold text-white"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}
