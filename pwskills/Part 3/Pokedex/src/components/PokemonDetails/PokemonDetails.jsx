import  "./PokemonDetails.css";
import usePokemon from "../../hooks/usePokemon";

const PokemonDetails = () => {
    const [pokemonDetails,setPokemonId] = usePokemon();

    return(
                <div className="pokemon-details">
                    <div className="pokemon-image">
                        <img src={pokemonDetails.image} alt={ pokemonDetails.name} />
                    </div>
                    <div className="pokemon-info">
                    <div className="pre-next">

                        <button onClick={()=>
                            setPokemonId( id => Number(id) -1)
                        } >Previous</button>

                        <h2><p className="id">{pokemonDetails.id} </p> { pokemonDetails.name}</h2>

                        <button onClick={()=>
                            setPokemonId( id => Number(id) +1)
                        } >Next</button>

                    </div>
                    <dl>
                        <dt>Height:</dt>
                        <dd>{pokemonDetails.height}</dd>

                        <dt>Weight:</dt>
                        <dd>{pokemonDetails.weight}</dd>

                        <dt>Types:</dt>
                        <dd>{pokemonDetails.types}</dd>

                        <dt>Abilities:</dt>
                        <dd>{pokemonDetails.abilities}</dd>

                        <dt>Attack:</dt>
                        <dd>{pokemonDetails.attack}</dd>

                        <dt>Defense:</dt>
                        <dd>{pokemonDetails.defense}</dd>

                        <dt>Speed:</dt>
                        <dd>{pokemonDetails.speed}</dd>

                        <dt>Hp:</dt>
                        <dd>{pokemonDetails.hp}</dd>
                    </dl>
                    
                    </div>
                </div>
    )
};




export default PokemonDetails