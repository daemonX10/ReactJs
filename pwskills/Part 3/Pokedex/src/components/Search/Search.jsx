import useDebounce from '../../hooks/useDebounce'
import './Search.css'
import  PropTypes from 'prop-types'

const Search = ( {updateSearchTerm} ) => {
  const debounceUpdateSearch = useDebounce((e) => updateSearchTerm(e.target.value), 5000);
  return (
    <>
    <input 
    id='search-pokemon'
    type="text" 
    placeholder='Pokemon Name '
    onChange={debounceUpdateSearch} /> 
    </>
  )
}

Search.propTypes = {
  updateSearchTerm:PropTypes.func
}


export default Search