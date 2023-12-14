import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import downloadPokemon from "../utils/downloadPokemon";

const usePokemon = () => {
    const { id } = useParams();
    const [pokemonDetails, setPokemonDetails] = useState([]);
    const [pokemonId, setPokemonId] = useState(id);

    const downloadGivenPokemon = useCallback(async (pokemonId) => {
        const POKEMON_DETAILS_URL = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
        const response = await axios.get(POKEMON_DETAILS_URL);
        const pokemon = response.data;

        const defaultImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;

        const newPokemonDetails = {
            name: pokemon.name,
            id: pokemon.id,
            height: pokemon.height,
            weight: pokemon.weight,
            image: pokemon.sprites.other.dream_world.front_default ? pokemon.sprites.other.dream_world.front_default : defaultImage,
            types: pokemon.types.map((type) => type.type.name).join([',']),
            abilities: pokemon.abilities.map((ability) => ability.ability.name).join(" , "),
            attack: pokemon.stats[1].base_stat,
            defense: pokemon.stats[2].base_stat,
            speed: pokemon.stats[5].base_stat,
            hp: pokemon.stats[0].base_stat
        };
        const type = Array(newPokemonDetails.types.split(","))[0];
        setPokemonDetails(newPokemonDetails);
        return type[0];

    }, []);

    const [pokemonListState, setPokemonListState] = useState({
        POKEDEX_URL: '',
        pokemonList: [],
        nextUrl: '',
        prevUrl: ''
    });

    const downLoadRelatedPokemon = useCallback(async (pokemonId) => {
        const type = await downloadGivenPokemon(pokemonId);
        await downloadPokemon(pokemonListState, setPokemonListState, `https://pokeapi.co/api/v2/type/${type}`);
    }, [downloadGivenPokemon])

    useEffect(() => {
        downLoadRelatedPokemon(pokemonId);
    }, [pokemonId]);

    useEffect(() => {
        setPokemonId(id);
    }, [id]);

    return [pokemonDetails, setPokemonId, pokemonListState];
}

export default usePokemon;