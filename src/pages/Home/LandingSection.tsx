import homeImg1 from "@/assets/imgs/slider1.webp";
import homeImg2 from "@/assets/imgs/slider2.webp";
import homeImg3 from "@/assets/imgs/slider3.webp";
import { Carousel } from "flowbite-react";
import SliderContent from "../../components/SliderContent";

export function LandingSection() {
  return (
    <section className="h-[calc(100svh-52px)] md:h-[calc(100svh-52px)] lg:h-[calc(100svh-72px)]">
      <Carousel slideInterval={5000} pauseOnHover>
        <SliderContent img={homeImg1} location={"Sir Al Dannieyh, Lebanon"}></SliderContent>
        <SliderContent img={homeImg3} location={"Ain Draham, Tunisia"}></SliderContent>
        <SliderContent img={homeImg2} location={"Sahara, Morocco"}></SliderContent>
      </Carousel>
    </section>
  );
}
