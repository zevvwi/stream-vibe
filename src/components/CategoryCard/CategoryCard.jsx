import './CategoryCard.scss'
import classNames from 'classnames'
import {Image} from "minista"
import Icon from "@/components/Icon"

const CategoryCard = (props) => {
  const {
    className,
    title,
    images = [],
  } = props

  return (
    <a
      className={classNames(className, 'category-card')}
      href='/movies'
    >
      <div className="category-card__images">
        {images.map((imageSrc, index) => (
          <Image
            src={imageSrc}
            key={index}
            className="category-card__image"
          />
        ))}
      </div>
      <div className="category-card__body">
        <h3 className="category-card__title">
          {title}
        </h3>
        <Icon
          className="category-card__icon"
          name="arrow-right"
        />
      </div>
    </a>
  )
}

export default CategoryCard