import Link from 'next/link'
import React from 'react'
import {BsPlayFill} from 'react-icons/bs'
import {AiFillStar} from 'react-icons/ai'
import { nanoid } from 'nanoid'


async function getMovie(params){
    const res = await fetch(`https://api.themoviedb.org/3/tv/${params}?api_key=b9e4f85c3b6987a76b17bb7579bc1ac8`)
    const data = await res.json()
    return data
}

async function getMovieCredits(params){
    const res = await fetch(`https://api.themoviedb.org/3/tv/${params}/credits?api_key=b9e4f85c3b6987a76b17bb7579bc1ac8`)
    const data = await res.json()
    return data
}

export default async function page({ params }) {
    
  const movie = await getMovie(params.id)
  const movieCredits = await getMovieCredits(params.id)
//   console.log(movie)

  return (
    <div className=''>
        <img className='absolute top-0 left-0 opacity-30 md:max-h-[500px] max-h-[300px] w-full object-cover' src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} />
        <div className='absolute top-0 left-0  w-full md:h-[500px] h-[300px] bg-gradient-to-t from-neutral-900 to-transparent'></div>
        <div className='relative max-w-[1440px] mx-auto p-4'>
            <div className='flex md:flex-row flex-col gap-4'>
                <img className='w-[70%] self-center md:w-[260px] h-full rounded-md shadow-2xl' src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" />
                <div className='flex flex-col gap-2'>
                    <h2 className='text-2xl font-bold'>{movie.name} <span>{movie.first_air_date.slice(0,4)}</span></h2>
                    <p>{movie.overview}</p>
                    <span className='flex items-center gap-2 text-xl '><AiFillStar className='text-yellow-400' />{movie.vote_average.toFixed(1)}</span>
                    <p className=' bg-red-500 w-fit px-2 rounded-md'>{movie.runtime} Min</p>
                    <div className='flex gap-4'>
                    <h3>Director:</h3>
                    {movieCredits.crew.map(crew => crew.known_for_department == 'Directing' ? 
                    <span key={nanoid()}><Link href={`/person/${crew.id}`}><span className='inline hover:text-red-500 cursor-pointer'>{crew.name}</span></Link></span> : '')}
                    </div>
                    
                    <div className='flex flex-wrap md:gap-4'>
                    <h3>Cast:</h3>
                        {movieCredits.cast.slice(0,3).map(cast => (
                            <span key={nanoid()}><Link href={`/person/${cast.id}`}><span className='hover:text-red-500 cursor-pointer'>{cast.name}</span></Link></span>    
                        ))}
                    </div>
                    <div className='flex gap-4 items-center'>
                        <button className='w-fit px-4 py-2 bg-slate-200 rounded-sm text-black font-bold flex items-center gap-2 my-4'><BsPlayFill /> Play Now</button>
                        <button>Add to watch list</button>
                    </div>
                </div>
            </div>   


        </div>
        
    
    </div>
  )
}
