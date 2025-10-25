import './PlanCard.scss'
import classNames from 'classnames'
import Button from "@/components/Button"

const PlanCard = (props) => {
  const {
    className,
    title,
    description,
    price,
  } = props

  return (
    <div
      className={classNames(className, 'plan-card')}
    >
      <div className="plan-card__info">
        <h3 className="plan-card__title h4">
          {title}
        </h3>
        <div className="plan-card__description">
          <p>
            {description}
          </p>
        </div>
      </div>
      <div className="plan-card__conditions">
        <span className="plan-card__price">{price.value}</span>
        <div className="plan-card__period">{price.label}</div>
      </div>
      <div className="plan-card__actions">
        <Button
          label="Start Free Trial"
          href="/subscriptions"
          mode="black-08"
        />
        <Button
          label="Choose Plan"
          href="/subscriptions"
        />
      </div>
    </div>
  )
}

export default PlanCard