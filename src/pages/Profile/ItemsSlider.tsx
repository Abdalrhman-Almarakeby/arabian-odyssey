import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/Carousel'
import { RatedSlideCard } from '@/components/RatedSlideCard'
import { Attraction } from '@/types/attraction'
import AngleRightSVG from "@/assets/icons/angle-right.svg?react"
import AngleLeftSVG from "@/assets/icons/angle-left.svg?react"

type ItemsSliderProps = {
    attractions: Attraction[]
}

export function ItemsSlider({ attractions }: ItemsSliderProps) {
  return (
    <Carousel
          opts={{
            align: "start",
          }}
          className="w-full px-8"
        >
          <CarouselContent className="relative -ml-5">
            {attractions.map(({ _id, image, rating, name }) => (
              <CarouselItem key={name} className="pl-5 shadow-xl md:basis-1/2 lg:basis-1/3">
                <RatedSlideCard
                  to={`/attraction/${_id}`}
                  locationName={name}
                  image={image.path}
                  rating={rating}
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
  )
}
