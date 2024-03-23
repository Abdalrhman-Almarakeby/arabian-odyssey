import Review from "./Review";

interface AttractionProps {
    data: any
}

function Attraction({ data }: AttractionProps) {
  return (
    <div className="">
        <figure>
            <img src="" alt="" />
        </figure>
        <div className="">
            <h3></h3>
            <p></p>
            <Review rating={data.rating} ratingCount={data.ratingCount} />
            <p></p>
        </div>
    </div>
  )
}

export default Attraction;
