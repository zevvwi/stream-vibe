import './Checkbox.scss'
import classNames from 'classnames'
import getIdFromTitle from "@/utils/getIdFromTitle"

const Checkbox = (props) => {
  const {
    className,
    id = getIdFromTitle(props.label),
    label,
    isRequired,
  } = props

  return (
    <label
      htmlFor={id}
      className={classNames(className, 'checkbox')}
    >
      <input
        className="checkbox__input"
        id={id}
        type="checkbox"
        required={isRequired}
      />
      <span className="checkbox__label">
        {label}
      </span>
    </label>
  )
}

export default Checkbox