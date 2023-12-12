import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const usePokemonList = () =>{
    const Default_URL = 'https://pokeapi.co/api/v2/pokemon';
    // const [POKEDEX_URL, SetPOKEDEX_URL] = useState(Default_URL);
    // const [pokemonList, setPokemonList] = useState([]);
    // const [nextUrl, setNextUrl] = useState(Default_URL);
    // const [prevUrl, setPrevUrl] = useState(Default_URL);

    const [pokemonListState, setPokemonListState] = useState({
        POKEDEX_URL: Default_URL,
        pokemonList: [],
        nextUrl: Default_URL,
        prevUrl: Default_URL
    });

    const downloadPokemon = useCallback(async () => {
        const respose = await axios.get(pokemonListState.POKEDEX_URL ? pokemonListState.POKEDEX_URL : Default_URL);

        // setNextUrl(respose.data.next);
        // setPrevUrl(respose.data.previous);

        setPokemonListState({
            ...pokemonListState,
            nextUrl: respose.data.next,
            prevUrl: respose.data.previous
        })

        const pokemonResults = respose.data.results;
        const pokemonPromise = pokemonResults.map((pokemon) => axios.get(pokemon.url));
        const pokemonListData = await axios.all(pokemonPromise);

        const pokemonFinalList = pokemonListData.map(pokemonData => {
            const pokemon = pokemonData.data;

            const defaultImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;

            return {
                id: pokemon.id,
                name: pokemon.name,
                image: pokemon.sprites.other.dream_world.front_default ? pokemon.sprites.other.dream_world.front_default : defaultImage,
                types: pokemon.types.map((type) => type.type.name)
            }
        });
        // setPokemonList(pokemonFinalList);
        setPokemonListState((state) => ({
            ...state,
            pokemonList: pokemonFinalList
        }))

    }, [pokemonListState])

    useEffect(() => {
        downloadPokemon();
    }, [downloadPokemon])

  return [pokemonListState,setPokemonListState];
}

export default usePokemonList;