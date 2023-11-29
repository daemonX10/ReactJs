import Card from "../Card/Card"
import './Grid.css'
import PropTypes from 'prop-types'
const Grid = ({numberOfCards=9}) => {
  return (
  <>
    <h1 className="turn-highlight">
      Current Turn  : 
    </h1>
    
    <div className="grid">
      {Array(numberOfCards).fill(<Card />).map((el, idx) => {
        return <Card key={idx} />
      })}
    </div>
  </>
  )
}

Grid.propTypes = {
  numberOfCards: PropTypes.number
}

export default Grid