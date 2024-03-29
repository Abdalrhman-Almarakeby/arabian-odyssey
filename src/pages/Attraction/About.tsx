import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/Carousel";
import AngleRightSVG from "@/assets/icons/angle-right.svg?react";
import AngleLeftSVG from "@/assets/icons/angle-left.svg?react";
import LocationDotSVG from "@/assets/icons/location-dot.svg?react";
import { Rating } from "@/components/Rating";
import { Attraction } from "@/types/attraction";
import { useEffect, useState } from "react";
import { Badge } from "flowbite-react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import BookmarkSVG from "@/assets/icons/bookmark.svg?react";
import BookmarkOutlineSVG from "@/assets/icons/outline-bookmark.svg?react";
import { useUser } from "@/contexts/UserContext";
import toast from "react-hot-toast";
import axios, { AxiosResponse } from "axios";
import { useLocalStorageToken } from "@/contexts/LocalStorageTokenContext";

type AboutProps = {
  attraction: Attraction;
};

export function About({ attraction }: AboutProps) {
  const [active, setActive] = useState<string>(attraction.images[0].path);
  const [addedToWishList, setAddedToWishList] = useState<null | boolean>(null);
  const { user } = useUser();
  const { token } = useLocalStorageToken();

  useEffect(() => {
    setActive(attraction.images[0].path);
  }, [attraction]);

  const inWishList = user && user.WishList.some((item) => item.id === attraction._id);

  const showBookmark = addedToWishList === null ? inWishList : addedToWishList;

  function handleWishListToggle() {
    if (!user) {
      toast.error(
        <>
          Please
          <>&nbsp;</>
          <Link to="/signin" className="underline">
            Sign in
          </Link>
          <>&nbsp;</>
          to add attractions to your wish list
        </>
      );
      return;
    }
    if (showBookmark) {
      const toastId = toast.loading(`Removing ${attraction.name} from your wish list...`);
      axios
        .patch(
          `https://arabian-odyssey.vercel.app/user/wishlist/${attraction._id}`,
          {},
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              token: `ArabianOdyssey__${token}`,
            },
          }
        )
        .then((res: AxiosResponse) => res.data)
        .then((data) => {
          if (data.message === "success") {
            setAddedToWishList(false);
            toast.success(`${attraction.name} is removed from your wish list`);
          } else {
            toast.error(data.message ?? "Sorry, something went wrong. Please try again.");
          }
        })
        .catch((err) =>
          toast.error(err.message ?? "Sorry, something went wrong. Please try again.")
        )
        .finally(() => toast.dismiss(toastId));
    } else {
      const toastId = toast.loading(`Adding ${attraction.name} to your wish list...`);
      axios
        .post(
          `https://arabian-odyssey.vercel.app/user/wishlist/${attraction._id}`,
          {},
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              token: `ArabianOdyssey__${token}`,
            },
          }
        )
        .then((res: AxiosResponse) => res.data)
        .then((data) => {
          if (data.message === "success") {
            setAddedToWishList(true);
            toast.success(`${attraction.name} is added to your wish list`);
          } else {
            toast.error(data.message ?? "Sorry, something went wrong. Please try again.");
          }
        })
        .catch((err) =>
          toast.error(err.message ?? "Sorry, something went wrong. Please try again.")
        )
        .finally(() => toast.dismiss(toastId));
    }
  }

  return (
    <div className="mb-20 flex flex-col gap-10 px-10 pb-5 shadow-md md:mb-15 md:gap-14 lg:flex-row lg:gap-0">
      <div className="absolute right-10 top-15 grid">
        <button onClick={handleWishListToggle}>
          {showBookmark ? (
            <>
              <BookmarkSVG className="w-[20px]" />
              <span className="sr-only">Remove from the wish list </span>
            </>
          ) : (
            <>
              <BookmarkOutlineSVG className="w-[20px]" />
              <span className="sr-only">Add to the wish list </span>
            </>
          )}
        </button>
      </div>
      <div className="pt-5 lg:hidden">
        <h1 className="mb-1 text-3xl font-bold">{attraction.name}</h1>
        <Rating rating={attraction.rating} />
      </div>
      <div className="grid w-full gap-4 rounded">
        <img
          className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
          src={active}
          alt=""
        />
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full px-8"
        >
          <CarouselContent className="relative -ml-5">
            {attraction.images.map(({ path }) => (
              <CarouselItem
                key={path}
                className="grid basis-1/2 place-items-center pl-5 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5"
              >
                <img
                  onClick={() => setActive(path)}
                  src={path}
                  className={`h-20 max-w-full cursor-pointer rounded-lg object-cover object-center ${
                    active === path && "opacity-60"
                  }`}
                  alt="gallery-image"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute -left-[15px] top-1/2 grid size-[40px] -translate-y-1/2 place-items-center rounded-full border bg-white">
            <AngleLeftSVG className="w-[15px] fill-primary" />
          </CarouselPrevious>
          <CarouselNext className="absolute -right-[15px] top-1/2 grid size-[40px] -translate-y-1/2 place-items-center rounded-full border bg-white">
            <AngleRightSVG className="w-[15px] fill-primary" />
          </CarouselNext>
        </Carousel>
      </div>
      <div className="w-full px-0 sm:max-w-[500px] md:min-h-full md:max-w-none lg:pl-10 lg:pr-6">
        <div className="mb-8 hidden lg:block">
          <h1 className="mb-1 text-3xl font-bold">{attraction.name}</h1>
          <Rating rating={attraction.rating} />
        </div>
        <h2 className="mb-1 text-2xl font-bold md:text-3xl">About</h2>
        <Link
          className="flex items-center text-sm font-light capitalize underline"
          to={`/country/${attraction.country.id}/${attraction.state.id}`}
        >
          <LocationDotSVG className="mr-1 size-5" />
          {attraction.state.name}, {attraction.country.name}
        </Link>
        <p className="mb-4 mt-6 text-base font-light">{attraction.desc}</p>
        <div className="flex flex-wrap items-start gap-3">
          {attraction.openingHours && <Badge color={"success"}>{attraction.openingHours}</Badge>}
          {attraction.admissionFees && <Badge color={"success"}>{attraction.admissionFees}</Badge>}
          {attraction.category.map((item) => (
            <HashLink to={`/category/${item.id}#`} key={item.id}>
              <Badge color={"success"} className="underline">
                {item.name}
              </Badge>
            </HashLink>
          ))}
        </div>
      </div>
    </div>
  );
}
