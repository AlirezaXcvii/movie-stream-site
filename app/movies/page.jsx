'use client'
import Card from '@/components/Card';
import React, { useEffect, useState } from 'react'



export default function Movies() {

  const [movies , SetMovies] = useState([])

  useEffect(() => {
    for(let i=1; i<=5 ; i++){
      fetch(`https://api.themoviedb.org/3/discover/movie?api_key=b9e4f85c3b6987a76b17bb7579bc1ac8&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${i}`)
      .then((response) => response.json())
      .then((data) => SetMovies(prev => [...prev, data.results.map(movie => movie)]))
  }}, [])

  return (
    <div className='max-w-[1400px] flex flex-wrap mx-auto'>
        {movies.length >= 0 &&  movies.map(item => item.map(movie => (
           <Card data={movie} key={movie.id} />
          )))}
    </div>
  )
}