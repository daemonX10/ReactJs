import  "./PokemonDetails.css";

const PokemonDetails = (PokemonData) => {
    return (
        <div>
            <h1>PokemonDetails</h1>
            <h3>{PokemonData.name}</h3>
        </div>
    )
}

export default PokemonDetails