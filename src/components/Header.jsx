import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';
import { SearchImage } from '../hooks/api';
import Card from './Card';

function Header({ placeholder, data, setSelectedImg }) {
  const [query, setQuery] = useState();
  const [searchQ, setSearch] = useState();

  console.log(SearchImage(query));
  const search = () => {
    setSearch(query);
  };
  const searchData = SearchImage(searchQ);
  return (
    <>
      <div className='container'>
        <div className='flex'>
          <h1>Image Gallery</h1>
          <div className='search-box'>
            <FaSearch />
            <input
              type='text'
              onChange={(e) => setQuery(e.target.value)}
              placeholder={placeholder}
            />
            <button className='btn btn-primary' onClick={search}>
              Search
            </button>
          </div>
        </div>
      </div>
      <Card searchQuery={searchData} setSelectedImg={setSelectedImg} />
    </>
  );
}

export default Header;
