import { useCallback, useEffect, useState } from 'react';
import './PokemonList.css'
import axios from 'axios';
import Pokemon from '../Pokemon/Pokemon';

const PokemonList = () => {

    const Default_URL = 'https://pokeapi.co/api/v2/pokemon';
    const [POKEDEX_URL, SetPOKEDEX_URL] = useState(Default_URL);
    const [pokemonList, setPokemonList] = useState([]);
    const [nextUrl, setNextUrl] = useState(Default_URL);
    const [prevUrl, setPrevUrl] = useState(Default_URL);
    
    const downloadPokemon = useCallback(async () => {
        const respose = await axios.get(POKEDEX_URL ? POKEDEX_URL : Default_URL);

        setNextUrl(respose.data.next);
        setPrevUrl(respose.data.previous);

        const pokemonResults = respose.data.results;
        const pokemonPromise = pokemonResults.map((pokemon) => axios.get(pokemon.url));
        const pokemonListData = await axios.all(pokemonPromise);

        const pokemonFinalList = pokemonListData.map(pokemonData => {
        const pokemon = pokemonData.data;

        const defaultImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;

            return {
                id: pokemon.id,
                name: pokemon.name,
                image: pokemon.sprites.other.dream_world.front_default ? pokemon.sprites.other.dream_world.front_default : defaultImage ,
                types: pokemon.types.map((type) => type.type.name)
            }
        });
        setPokemonList(pokemonFinalList);
        console.log(pokemonFinalList);
    },[POKEDEX_URL])

    useEffect(()=>{
        downloadPokemon();
    },[downloadPokemon])

  return (
    <>
        
        <div className="page-controller">
            <button onClick={()=>{
                SetPOKEDEX_URL(prevUrl);
            }}>Prev</button>
            <h2> Pokemon List </h2>
            <button
            onClick={()=>{
                SetPOKEDEX_URL(nextUrl);
            }}>Next</button>
        </div>
    <div className="pokemon-list-wrapper">
        {pokemonList.map((pokemon,index) => <Pokemon name={pokemon.name} url={pokemon.image} id={pokemon.id} key={index} /> )}
    </div>
    </>
  )
}

export default PokemonList;