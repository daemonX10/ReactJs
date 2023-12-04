import { useEffect, useState } from 'react';
import './PokemonList.css'
import axios from 'axios';

const PokemonList = () => {

    const POKEDEX_API = 'https://pokeapi.co/api/v2/pokemon';
    const [pokemonList, setPokemonList] = useState([]);
    
    const  downloadPokemon = async ()=>{
        const respose = await axios.get(POKEDEX_API);
        console.log(respose.data.results);
        setPokemonList(respose.data.results);
    }

    useEffect(()=>{
        downloadPokemon();
    },[])

  return (
    <>
        {pokemonList.map((pokemon,index)=>{
            return(
            <h2 key={index}>{pokemon.name}</h2>
            )
        })}
    </>
  )
}

export default PokemonList;