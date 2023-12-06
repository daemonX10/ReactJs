import './Pokemon.css'
import PropTypes from 'prop-types'

const Pokemon = ({ name, url }) => {
  return (
        <div className="pokemon-frame">
          <img src={url} />
          <h3>{name}</h3>
        </div>
  )
}

Pokemon.proptype = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

export default Pokemon