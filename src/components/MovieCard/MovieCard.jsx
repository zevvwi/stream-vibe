import './MovieCard.scss'
import {Image} from "minista"
import Badge from "@/components/Badge"
import RatingView from "@/components/RatingView"

const MovieCard = (props) => {
  const {
    title,
    imgSrc,
    duration,
    views,
    released,
    rating,
    seasons,
    href = "/movie",
  } = props

  return (
    <a
      className='movie-card'
      href={href}
      title={title}
    >
      <h3 className="visually-hidden">{title}</h3>
      <Image
        src={imgSrc}
        className="movie-card__image"
      />
      <div className="movie-card__body">
        {duration && (
          <Badge
            iconName="clock"
            iconAriaLabel={duration}
            hasFillIcon
          >
            {duration}
          </Badge>
        )}

        {seasons && (
          <Badge
            iconName="catalog"
            hasFillIcon
          >
            {seasons}
          </Badge>
        )}

        {rating && (
          <Badge
            className="movie-card__rating-badge"
          >
            <RatingView
              {...rating}
            />
          </Badge>
        )}

        {views && (
          <Badge
            iconName="eye"
            iconAriaLabel="Views"
            hasFillIcon
          >
            {views}
          </Badge>
        )}

        {released && (
          <Badge
            className="movie-card__released-badge"
            isBig
          >
            Released at <time className="movie-card__released-badge-label" dateTime={released.dateTime}>{released.label}</time>
          </Badge>
        )}
      </div>
    </a>
  )
}

export default MovieCard