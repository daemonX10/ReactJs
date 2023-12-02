import Icon from "../Icon/Icon"
import PropTypes from 'prop-types'
import './Card.css'
const Card = ({iconName , onPlay }) => {
    console.log("Move Played");
  return (
    <div className="card" onClick={onPlay}>
        <Icon name={iconName} />
    </div>
  )
}

Card.propTypes = {
  iconName: PropTypes.string
}

Card.propTypes = {
  iconName: PropTypes.string,
  onPlay: PropTypes.func
}

export default Card