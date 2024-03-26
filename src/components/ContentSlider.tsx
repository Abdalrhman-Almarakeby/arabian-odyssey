import { useEffect, useState } from "react";
import { CarouselProvider, Slider, ButtonBack, ButtonNext } from "pure-react-carousel";
import { RatedSlideCard } from "@/components/RatedSlideCard";
import AngleRightSVG from "@/assets/icons/angle-right.svg?react";
import AngleLeftSVG from "@/assets/icons/angle-left.svg?react";
import { UnratedSwiperSlide } from "./UnratedSwiperSlide";
import temp from "@/assets/temp.jpg";
import "pure-react-carousel/dist/react-carousel.es.css";

type data = {
  name: string;
  image: { path: string };
  rating?: number;
  _id: string;
  country: string;
  images: { path: string }[];
};

type ContentSliderProps = {
  data: data[];
  isRated: boolean;
  linkTo?: string;
};

export function ContentSlider({ data, isRated, linkTo }: ContentSliderProps) {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  let visibleSlides: number;

  if (width <= 640) {
    visibleSlides = 1;
  } else if (width <= 768) {
    visibleSlides = 2;
  } else {
    visibleSlides = 3;
  }

  const getFullLink = (link: string, item: any) => {
    if (!link) return linkTo;

    const regex = /:(\w+)/gi;
    const matches = Array.from(link.matchAll(regex));
    for (const match of matches) {
      link = link.replace(match[0], item[match[1]]);
    }
    return link;
  };

  return (
    <CarouselProvider
      className="relative w-full"
      isIntrinsicHeight
      naturalSlideWidth={100}
      naturalSlideHeight={125}
      totalSlides={data.length}
      visibleSlides={visibleSlides}
      interval={1000}
    >
      <Slider className="px-6">
        {isRated
          ? data.map((item, i) => (
              <RatedSlideCard
                locationName={item.name}
                image={
                  item.image
                    ? item.image.path
                    : item.images && item.images.length
                    ? item.images[0].path
                    : temp
                }
                rating={item.rating ?? 0}
                id={item._id}
                key={i}
                linkTo={linkTo && getFullLink(linkTo, item)}
                i={i}
              />
            ))
          : data.map((item, i: number) => (
              <UnratedSwiperSlide
                locationName={item.name}
                image={
                  item.image
                    ? item.image.path
                    : item.images && item.images.length
                    ? item.images[0].path
                    : temp
                }
                key={i}
                id={item._id}
                linkTo={linkTo && getFullLink(linkTo, item)}
                i={i}
              />
            ))}
      </Slider>
      <div className="absolute top-[calc(50%-36px)] mt-3 flex w-full justify-between">
        <ButtonBack>
          <AngleLeftSVG className="w-[22.5px] fill-primary" />
        </ButtonBack>
        <ButtonNext>
          <AngleRightSVG className="w-[22.5px] fill-primary" />
        </ButtonNext>
      </div>
    </CarouselProvider>
  );
}
