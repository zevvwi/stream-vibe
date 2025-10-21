import './DeviceCard.scss'
import classNames from 'classnames'

const DeviceCard = (props) => {
  const {
    className,
    title,
    description,
    imgSrc,
  } = props

  return (
    <div
      className={classNames(className, 'device-card')}
    >
      <header className="device-card__header">
        <div className="device-card__image-wrapper">
          <img
            class="device-card__image"
            src={imgSrc}
            alt=""
            width="40"
            height="40"
            loading="lazy"
          />
        </div>
        <h3 className="device-card__title h4">{title}</h3>
      </header>
      <div className="device-card__description">
        <p>
          {description}
        </p>
      </div>
    </div>
  )
}

export default DeviceCard