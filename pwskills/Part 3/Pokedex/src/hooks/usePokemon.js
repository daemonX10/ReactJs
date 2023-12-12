import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const usePokemon = ()=>{
    const { id } = useParams();
    const POKEMON_DETAILS_URL = `https://pokeapi.co/api/v2/pokemon/`;
    const [pokemonDetails, setPokemonDetails] = useState([]);
    const [pokemonId, setPokemonId] = useState(id);

    const downloadPokemon = useCallback(async () => {

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
    }, [POKEMON_DETAILS_URL, pokemonId])

    useEffect(() => {
        downloadPokemon();
    }, [downloadPokemon])

   return [pokemonDetails,setPokemonId];

}

export default usePokemon;