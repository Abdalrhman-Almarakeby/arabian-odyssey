import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface ReviewProps {
    rating: 1 | 2 | 3 | 4 | 5,
    ratingCount: number
}

function Review({ rating, ratingCount }: ReviewProps) {
  return (
    <div className="flex items-center">
    {Array.from({ length: Math.round(rating) }).map((_, i) => (
      <FontAwesomeIcon
        icon={faStar}
        className="text-primary text-xl mr-1"
        key={i}
        />
    ))}
          {rating}
          {ratingCount}
          </div>
  )
}

export default Review