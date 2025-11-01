import './MovieDetails.scss'
import classNames from 'classnames'
import SliderNavigation from "@/components/Slider/components/SliderNavigation"
import Slider from "@/components/Slider"

const MovieDetails = () => {
  const titleId = 'movie-details'
  const castSliderNavigationId = 'movie-cast-slider-navigation'

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

          </Slider>
        </div>
        <div className="movie-details__panel"></div>
      </div>
      <aside className="movie-details__info">
        <div className="movie-details__panel"></div>
      </aside>
    </section>
  )
}

export default MovieDetails