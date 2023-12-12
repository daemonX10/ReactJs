import { useEffect, useState } from "react";
import downloadPokemon from "../utils/downloadPokemon";

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


    useEffect(() => {
        downloadPokemon(pokemonListState, setPokemonListState, Default_URL);
    }, [Default_URL, pokemonListState]);

  return [pokemonListState,setPokemonListState];
}

export default usePokemonList;