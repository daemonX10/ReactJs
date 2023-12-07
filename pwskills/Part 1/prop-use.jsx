// parent component:

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