import { useCallback, useEffect, useState } from "react";
import  "./PokemonDetails.css";
import{ useParams }from 'react-router-dom'
import axios from "axios";



const PokemonDetails = () => {
    const {id} =  useParams();
    const Default_URL = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const [POKEMON_URL, SetPOKEMON_URL] = useState(Default_URL);
    const [pokemonDetails , SetPokemonDetail] = useState([]);
    const [nextUrl,setNextUrl] = useState(Default_URL);
    const [preUrl, setPrevUrl] = useState(Default_URL);

    const PokemonData = useCallback( async () => {
        
        const response = await axios.get(POKEMON_URL ? POKEMON_URL : Default_URL);

        setNextUrl(`https://pokeapi.co/api/v2/pokemon/${id+1}`)
        setPrevUrl(`https://pokeapi.co/api/v2/pokemon/${id-1}`)
        
        const details = response.data;

        const PokemonDetailList = details.map((pokemonData) => {
            return ({
                id: pokemonData.id,
                name: pokemonData.name,
                image: pokemonData.sprites.other.dream_world.front_default ? pokemonData.sprites.other.dream_world.front_default : defaultImage,
                types: pokemonData.types.map((type) => type.type.name)
            });
        });

        const defaultImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`;
        

    },[])

    useEffect(()=>{
        PokemonData();
    })

console.log(PokemonData());

    return (
        <div>
            <h1>PokemonDetails</h1>
        </div>
    )
}

export default PokemonDetails