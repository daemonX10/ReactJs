import './Search.css'
import  PropTypes from 'prop-types'

const Search = ( {updateSearchTerm} ) => {
  return (
    <>
    <input 
    id='search-pokemon'
    type="text" 
    placeholder='Pokemon Name '
    onChange={(e)=>updateSearchTerm(e.target.value)} /> 
    </>
  )
}

Search.propTypes = {
  updateSearchTerm:PropTypes.func
}


export default Search