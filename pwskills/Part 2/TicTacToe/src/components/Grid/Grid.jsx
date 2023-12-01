import { useState } from "react"
import Card from "../Card/Card"
import './Grid.css'
import PropTypes from 'prop-types'
const Grid = ({numberOfCards=9}) => {

  const [turn, setTurn] = useState(true);

  function play (){
    console.log('Move Played');
    setTurn(!turn);
  }

  return (
  <>
    <h1 className="turn-highlight">
      Current Turn  : {turn ? 'X' : 'O'}
    </h1>
    
    <div className="grid">
      {Array(numberOfCards).fill().map((el, idx) => {
        return <Card onPlay={play} key={idx} />
      })}
    </div>
  </>
  )
}

Grid.propTypes = {
  numberOfCards: PropTypes.number
}

export default Grid