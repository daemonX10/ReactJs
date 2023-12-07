import './Pokemon.css';
import PropTypes from 'prop-types';

const Pokemon = ({ name, url,id }) => {
  return (
      <div className="pokemon-frame">
        <p className="pokemon-id">{id}
        </p>
        <img src={url} />
        <h3>{name}</h3>
      </div>

  );
};

Pokemon.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Pokemon