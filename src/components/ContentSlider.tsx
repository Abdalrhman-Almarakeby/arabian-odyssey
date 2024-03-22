import {
  CarouselProvider,
  Slider,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import { useEffect, useState } from "react";
import "pure-react-carousel/dist/react-carousel.es.css";
import RatedSwiperSlide from "@/components/RatedSwiperSlide";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import UnratedSwiperSlide from "./UnratedSwiperSlide";
import x from "@/assets/temp.jpg";

interface ContentSliderProps {
  data: any;
  isRated: boolean;
}

function ContentSlider({ data, isRated }: ContentSliderProps) {
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

  return (
    <CarouselProvider
      className="w-full relative"
      isIntrinsicHeight
      naturalSlideWidth={100}
      naturalSlideHeight={125}
      totalSlides={data.length}
      visibleSlides={visibleSlides}
      interval={1000}
    >
      <Slider className="px-6">
        {isRated
          ? data.map((item: any, i: number) => (
              <RatedSwiperSlide
                locationName={item.name}
                image={item.image ? item.image.path : x}
                rating={item.rating}
                ratingCount={item.ratingCount}
                key={i}
                i={i}
              />
            ))
          : data.map((item: any, i: number) => {
              return (
                <UnratedSwiperSlide
                  locationName={item.name}
                  image={item.image ? item.image.path : x}
                  key={i}
                  i={i}
                />
              );
            })}
      </Slider>
      <div className="mt-3 w-full flex justify-between text-primary text-4xl absolute top-[calc(50%-36px)]">
        <ButtonBack>
          <FontAwesomeIcon icon={faAngleLeft} />
        </ButtonBack>
        <ButtonNext>
          <FontAwesomeIcon icon={faAngleRight} />
        </ButtonNext>
      </div>
    </CarouselProvider>
  );
}

export default ContentSlider;
