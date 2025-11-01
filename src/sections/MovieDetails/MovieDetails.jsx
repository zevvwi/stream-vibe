import './MovieDetails.scss'
import classNames from 'classnames'
import SliderNavigation from "@/components/Slider/components/SliderNavigation"
import Slider from "@/components/Slider"
import PersonCard from "@/components/PersonCard"
import Button from "@/components/Button"
import ReviewCard from "@/components/ReviewCard"

const MovieDetails = () => {
  const titleId = 'movie-details'
  const castSliderNavigationId = 'movie-cast-slider-navigation'

  const castItems = [
    {
      imgSrc: '/src/assets/images/people/1.jpg',
      imgAlt: 'John Doe',
    },
    {
      imgSrc: '/src/assets/images/people/2.jpg',
      imgAlt: 'John Doe',
    },
    {
      imgSrc: '/src/assets/images/people/3.jpg',
      imgAlt: 'John Doe',
    },
    {
      imgSrc: '/src/assets/images/people/4.jpg',
      imgAlt: 'John Doe',
    },
    {
      imgSrc: '/src/assets/images/people/5.jpg',
      imgAlt: 'John Doe',
    },
    {
      imgSrc: '/src/assets/images/people/6.jpg',
      imgAlt: 'John Doe',
    },
    {
      imgSrc: '/src/assets/images/people/7.jpg',
      imgAlt: 'John Doe',
    },
    {
      imgSrc: '/src/assets/images/people/8.jpg',
      imgAlt: 'John Doe',
    },

    {
      imgSrc: '/src/assets/images/people/1.jpg',
      imgAlt: 'John Doe',
    },
    {
      imgSrc: '/src/assets/images/people/2.jpg',
      imgAlt: 'John Doe',
    },
    {
      imgSrc: '/src/assets/images/people/3.jpg',
      imgAlt: 'John Doe',
    },
    {
      imgSrc: '/src/assets/images/people/4.jpg',
      imgAlt: 'John Doe',
    },
    {
      imgSrc: '/src/assets/images/people/5.jpg',
      imgAlt: 'John Doe',
    },
    {
      imgSrc: '/src/assets/images/people/6.jpg',
      imgAlt: 'John Doe',
    },
    {
      imgSrc: '/src/assets/images/people/7.jpg',
      imgAlt: 'John Doe',
    },
    {
      imgSrc: '/src/assets/images/people/8.jpg',
      imgAlt: 'John Doe',
    },
  ]

  const reviewItem = [
    {
      name: 'Aniket Roy',
      subtitle: 'From India',
      description: 'This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.',
      ratingValue: 4.5,
    },
    {
      name: 'Swaraj',
      subtitle: 'From India',
      description: 'A restless king promises his lands to the local tribals in exchange of a stone (Panjurli, a deity of Keradi Village) wherein he finds solace and peace of mind.',
      ratingValue: 5,
    },
    {
      name: 'Aniket Roy',
      subtitle: 'From India',
      description: 'This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.',
      ratingValue: 4.5,
    },
    {
      name: 'Swaraj',
      subtitle: 'From India',
      description: 'A restless king promises his lands to the local tribals in exchange of a stone (Panjurli, a deity of Keradi Village) wherein he finds solace and peace of mind.',
      ratingValue: 5,
    },
    {
      name: 'Aniket Roy',
      subtitle: 'From India',
      description: 'This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.',
      ratingValue: 4.5,
    },
    {
      name: 'Swaraj',
      subtitle: 'From India',
      description: 'A restless king promises his lands to the local tribals in exchange of a stone (Panjurli, a deity of Keradi Village) wherein he finds solace and peace of mind.',
      ratingValue: 5,
    },
    {
      name: 'Aniket Roy',
      subtitle: 'From India',
      description: 'This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.',
      ratingValue: 4.5,
    },
    {
      name: 'Swaraj',
      subtitle: 'From India',
      description: 'A restless king promises his lands to the local tribals in exchange of a stone (Panjurli, a deity of Keradi Village) wherein he finds solace and peace of mind.',
      ratingValue: 5,
    },
  ]

  return (
    <section
      className="movie-details container"
      aria-labelledby={titleId}
    >
      <h2
        className="visually-hidden"
        id={titleId}
      >
        Detailed movie information
      </h2>
      <div className="movie-details__main">
        <div className="movie-details__panel">
          <div className="movie-details__group">
            <h3 className="movie-details__title">Description</h3>
          </div>
          <div className="movie-details__description">
            <p>
              A fiery young man clashes with an unflinching forest officer in a south Indian village where spirituality, fate and folklore rule the lands.
            </p>
          </div>
        </div>
        <div className="movie-details__panel">
          <header className="movie-details__panel-header">
            <div className="movie-details__group">
              <h3 className="movie-details__title">Cast</h3>
              <SliderNavigation
                id={castSliderNavigationId}
                hasPagination={false}
                mode="rounded"
                buttonMode="black-08"
              />
            </div>
          </header>
          <Slider
            navigationTargetElementId={castSliderNavigationId}
            hasScrollbarOnMobile={false}
            sliderParams={{
              slidesPerView: 'auto',
              spaceBetween: 10,
              breakpoints: {
                1024: {
                  slidesPerView: 'auto',
                  spaceBetween: 20,
                  allowTouchMove: false,
                }
              }
            }}
          >
            {castItems.map((person, index) => (
              <PersonCard
                key={index}
                {...person}
              />
            ))}
          </Slider>
        </div>
        <div className="movie-details__panel">
          <header className="movie-details__panel-header">
            <h3 className="movie-details__title">Reviews</h3>
            <Button
              mode="black-08"
              iconName="plus"
              label="Add Your Review"
              href="/"
            />
          </header>
          <Slider
            navigationMode="rounded"
            isNavigationHiddenMobile={false}
            hasScrollbarOnMobile={false}
            sliderParams={{
              slidesPerView: 2,
              slidesPerGroup: 2,
              breakpoints: {
                0: {
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                  spaceBetween: 16,
                },
                1024: {
                  slidesPerView: 2,
                  slidesPerGroup: 2,
                  spaceBetween: 20,
                  allowTouchMove: false,
                },
              }
            }}
          >
            {reviewItem.map((reviewItem, index) => (
              <ReviewCard
                {...reviewItem}
                key={index}
              />
            ))}
          </Slider>
        </div>
      </div>
      <aside className="movie-details__info">
        <div className="movie-details__panel"></div>
      </aside>
    </section>
  )
}

export default MovieDetails