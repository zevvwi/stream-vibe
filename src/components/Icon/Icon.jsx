import './Icon.scss'
import classNames from "classnames"
import { Icon as MinistaIcon } from 'minista'

const Icon = (props) => {
  const {
    className,
    name,
    hasFill = false,
    ariaLabel,
  } = props

  return (
    <span
      className={classNames(className, 'icon')}
      aria-label={ariaLabel}
    >
      <MinistaIcon
        iconId={name}
        fill={hasFill ? 'currentColor' : 'none'}
        stroke={hasFill ? 'none' : 'currentColor'}
      />
    </span>
  )
}

export default Icon