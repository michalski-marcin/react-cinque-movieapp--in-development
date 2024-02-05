import { useState } from 'react';
import SearchMovie from '../components/Searchbar';
import PersonSearchCard from '../components/PersonSearchCard';
import MovieSearchCard from '../components/MovieSearchCard';
import TVSearchCard from '../components/TVSearchCard';

function Search() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchType, setSearchType] = useState('Movie');
  const [renderType, setRenderType] = useState('');
  const [noResult, setNoResult] = useState(false);
  let SearchComponent;
  if (renderType === 'Movie') {
    SearchComponent = MovieSearchCard;
  } else if (renderType === 'TV') {
    SearchComponent = TVSearchCard;
  } else if (renderType === 'Person') {
    SearchComponent = PersonSearchCard;
  }
  const handleSearchResults = (results) => {
    setSearchResults(results);
    setRenderType(searchType);
    if (searchType && results.length === 0) {
      setNoResult(true);
    } else {
      setNoResult(false);
    }
  };
  const handleChange = (e) => {
    setSearchType(e.target.value);
  };
  return (
    <div className='page-wrap'>
      <SearchMovie
        onSearchResults={handleSearchResults}
        onChange={handleChange}
      />
      <div className='text-center text-indigo-400'>
        {noResult && <p>No results found for the current search.</p>}
      </div>
      <div className='w-[85%] max-xl:w-[90%] mx-auto mt-[75px] grid grid-cols-2 gap-3 max-md:grid-cols-1 max-lg:w-[95%] max-sm:mt-[50px]'>
        {searchResults.map((result) => (
          <div className='my-2'>
            <SearchComponent
              className='p-2'
              key={result.id}
              {...result}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
