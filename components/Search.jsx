import React,{ useState } from 'react'
import {FiSearch} from 'react-icons/fi'
import { useRouter } from 'next/navigation'

export default function Search() {
    const [searchTerm, setSearchTerm] = useState('');
    const router = useRouter()

  const handleSearchInput = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const term = `search/${searchTerm}`
    router.push(term)
  };
  return (
    <form onSubmit={handleSubmit} className='flex gap-2 text-md'>
      <input
      className='bg-zinc-800 outline-none rounded-md px-4'
      
        type="text"
        value={searchTerm}
        onChange={handleSearchInput}
        placeholder="Search..."
      />
      <button type="submit" className='bg-red-600 hover:bg-red-500 px-2 rounded-md'><FiSearch /></button>
    </form>
  )
}
