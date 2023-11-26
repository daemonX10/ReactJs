import Card from "../Card/Card"
import './Grid.css'
import PropTypes from 'prop-types'
const Grid = ({numberOfCards=9}) => {
  return (
    <div className="grid">
        {Array(numberOfCards).fill(<Card/>).map((el,idx)=>{
          return <Card key={idx}/>
        })}
    
    </div>
  )
}

Grid.propTypes = {
  numberOfCards: PropTypes.number
}

export default Grid