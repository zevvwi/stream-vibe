import './Categories.scss'
import classNames from 'classnames'
import Section from "@/layouts/Section"
import CategoryCard from "@/components/CategoryCard"
import Slider from "@/components/Slider"
import SliderNavigation from "@/components/Slider/components/SliderNavigation"
import categoryItems from "./categoryItems"

const Categories = (props) => {
  const {
    className,
  } = props

  const sliderNavigationId = "categories-slider-navigation"

  return (
    <Section
      title="Explore our wide variety of categories"
      titleId="categories-title"
      description="Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"
      actions={(
        <div>
          <SliderNavigation
            mode="tile"
            id={sliderNavigationId}
          />
        </div>
      )}
      isActionsHiddenOnMobile
    >
      <Slider
        navigationTargetElementId={sliderNavigationId}
        isBeyondTheViewportOnMobileS
      >
        {categoryItems.map((categoryCard, index) => (
          <CategoryCard
            {...categoryCard}
            key={index}
          />
        ))}
      </Slider>
    </Section>
  )
}

export default Categories