// parent component:
import PropTypes from 'prop-types';

function App(){
    return(
        <div>
            <UserDetails name="Pwskills" bio="Advanced React" />
        </div>
    )
}


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

export {App, UserDetails};