import Icon from "../Icon/Icon"
import PropTypes from 'prop-types'
import './Card.css'
const Card = ({iconName}) => {
  return (
    <div className="card">
        <Icon name={iconName} />
    </div>
  )
}

Card.propTypes = {
  iconName: PropTypes.string
}

export default Card