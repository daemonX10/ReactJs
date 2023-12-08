// parent component:
import PropTypes from 'prop-types';

// child component:

function UserDetails(props){
    return(
        <div>
            <h1>{props.name}</h1>
            <p>{props.bio}</p>
        </div>
    )
}

UserDetails.propTypes = {
    name: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired
}

export {UserDetails};