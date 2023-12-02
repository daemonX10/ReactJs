import Icon from "../Icon/Icon"
import PropTypes from 'prop-types'
import './Card.css'


const Card = ({onPlay, player, index , gameEnd }) => {
    
    let icon = <Icon /> 
    if(player === 'X'){
      icon = <Icon name={"cross"} />
    } else if (player === 'O'){
      icon = <Icon name={"circle"} />
    }

  return (
    <div className="card" onClick={ ()=>{ !gameEnd && player =="" && onPlay(index) } }>
      {icon}
    </div>
  )
}


Card.propTypes = {
  iconName: PropTypes.string,
  onPlay: PropTypes.func,
  player: PropTypes.string,
  index: PropTypes.number,
  gameEnd: PropTypes.bool
}

export default Card