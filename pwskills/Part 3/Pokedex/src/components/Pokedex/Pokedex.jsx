import { useState } from 'react';
import PokemonList from '../PokemonList/PokemonList'
import Search from '../Search/Search'
import './Pokedex.css'

const Pokedex = () => {

  const [serachTerm, setSearchTerm] = useState('');

  return (
    <div className='pokedex-wrapper'>
    <h1>Pokedex</h1>
    <Search updateSearchTerm={setSearchTerm} />
    {serachTerm ? <div>
                    {serachTerm}
                  </div> 
                  : <PokemonList />}
    </div>
  )
}

export default Pokedex