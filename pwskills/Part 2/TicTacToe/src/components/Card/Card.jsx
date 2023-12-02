import Icon from "../Icon/Icon"
import PropTypes from 'prop-types'
import './Card.css'


const Card = ({iconName , onPlay, player }) => {

  function playMove(){
    onPlay();
    console.log(player);
  }
  
  return (
    <div className="card" onClick={playMove}>
        <Icon name={iconName} />
    </div>
  )
}


Card.propTypes = {
  iconName: PropTypes.string,
  onPlay: PropTypes.func
}

export default Card