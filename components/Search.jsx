import React,{ useState, useEffect, useRef } from 'react'
import {FiSearch} from 'react-icons/fi'
import { useRouter } from 'next/navigation'

export default function Search() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const router = useRouter();
    const inputRef = useRef();

    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchTerm.trim() !== '') {
                const url = `https://api.themoviedb.org/3/search/multi?api_key=b9e4f85c3b6987a76b17bb7579bc1ac8&language=en-US&query=${searchTerm}`
                fetch(url)
                    .then(response => response.json())
                    .then(data => setSearchResults(data.results))
            }
        }, 500);

        return () => clearTimeout(timer);
    }, [searchTerm])

    const handleSearchInput = (event) => {
        setSearchTerm(event.target.value);
    };
    
    const handleResultClick = (result) => {
        const term = result.profile_path ? `/person/${result.id}` : result.name ? `/tv/${result.id}` : `/movie/${result.id}`
        setSearchTerm('');
        setSearchResults([]);
        router.push(term)
    };

    const handleFocus = () => {
        setSearchResults([]);
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      if (searchTerm.trim() !== '') {
        const term = `search/${searchTerm}`
        router.push(term)
      }
    };

    return (
        <div className='relative inline-block w-full'>
            <form onSubmit={handleSubmit} className='w-full flex justify-between gap-2 text-md'>
                <input
                    ref={inputRef}
                    className='bg-zinc-800 outline-none rounded-md px-4 w-full'
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchInput}
                    onFocus={handleFocus}
                    placeholder="Search..."
                />
                <button type="submit" className='bg-red-600 hover:bg-red-500 px-2 rounded-md'><FiSearch /></button>
            </form>
            {searchResults.length > 0 && (
                <ul className='absolute z-50 left-0 right-0 max-h-[500px] bg-zinc-800 rounded-md shadow-lg text-sm overflow-y-scroll'>
                    {searchResults.map(result => (
                        <li key={result.id} onClick={() => handleResultClick(result)} className='p-2 cursor-pointer hover:bg-zinc-700 flex gap-2'>
                            {result.poster_path && <img className='w-8 h-10 object-cover rounded-md mr-2' src={`https://www.themoviedb.org/t/p/w92${result.poster_path}`} alt='' />}
                            {result.title || result.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
