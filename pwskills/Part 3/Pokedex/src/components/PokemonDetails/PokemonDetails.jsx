import {  useCallback, useEffect, useState } from "react";
import  "./PokemonDetails.css";
import{ useParams }from 'react-router-dom'
import axios from "axios";

const PokemonDetails = () => {

    const {id} = useParams();
    const POKEMON_DETAILS_URL = `https://pokeapi.co/api/v2/pokemon/`;
    const [pokemonDetails, setPokemonDetails] = useState([]);
    const [pokemonId,setPokemonId] = useState(id);

    const downloadPokemon = useCallback( async ()=>{

            const resposne = await axios.get(POKEMON_DETAILS_URL + `${pokemonId}`);
            const pokemon = resposne.data;

            const defaultImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;

            setPokemonDetails({
                name: pokemon.name,
                id: pokemon.id,
                height: pokemon.height,
                weight: pokemon.weight,
                image: pokemon.sprites.other.dream_world.front_default ? pokemon.sprites.other.dream_world.front_default : defaultImage,
                types: pokemon.types.map((type) => type.type.name).join(" , "),
                abilities: pokemon.abilities.map((ability) => ability.ability.name).join(" , "),
                attack: pokemon.stats[1].base_stat,
                defense: pokemon.stats[2].base_stat,
                speed: pokemon.stats[5].base_stat,
                hp: pokemon.stats[0].base_stat
            })
        },[POKEMON_DETAILS_URL,pokemonId])

useEffect(()=>{
    downloadPokemon();
},[downloadPokemon])

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