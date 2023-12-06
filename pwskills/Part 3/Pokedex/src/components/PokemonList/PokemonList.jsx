import { useEffect, useState } from 'react';
import './PokemonList.css'
import axios from 'axios';
import Pokemon from '../Pokemon/Pokemon';

const PokemonList = () => {

    const POKEDEX_API = 'https://pokeapi.co/api/v2/pokemon';
    const [pokemonList, setPokemonList] = useState([]);
    
    const  downloadPokemon = async ()=>{
        const respose = await axios.get(POKEDEX_API);
        const pokemonResults = respose.data.results;
        const pokemonPromise = pokemonResults.map((pokemon)=>axios.get(pokemon.url));
        const pokemonListData = await axios.all(pokemonPromise);

        const pokemonFinalList = pokemonListData.map(pokemonData =>{
            const pokemon = pokemonData.data;
            return {
                id:pokemon.id,
                name:pokemon.name,
                image: pokemon.sprites.other.dream_world.front_default,
                types : pokemon.types.map((type)=>type.type.name)
            }
        });
        setPokemonList(pokemonFinalList);
        console.log(pokemonFinalList);
    }

    useEffect(()=>{
        downloadPokemon();
    },[])

  return (
    <>
    <div className="pokemon-list-wrapper">
        <h2> Pokemon List </h2>
        {pokemonList.map((pokemon,index) => <Pokemon name={pokemon.name} url={pokemon.image} key={index} /> )}
    </div>
    </>
  )
}

export default PokemonList;