'use client';
import Card from '@/components/Card';
import React, { useEffect, useRef, useState } from 'react';

async function fetchMovies(page){
  const response = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=b9e4f85c3b6987a76b17bb7579bc1ac8&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`);
  const data = await response.json();
  return data
}

export default function MoviePage() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(3); // start at page 3
  const loadMoreButtonRef = useRef(null);

  useEffect(() => {
    async function getData() {
      // Only fetch data for the first three pages
      for (let i = 1; i <= 3; i++) {
        const data = await fetchMovies(i);

        setMovies(prevMovies => {
          const uniqueMovies = data.results.filter(movie => !prevMovies.some(prevMovie => prevMovie.id === movie.id));
          return [...prevMovies, ...uniqueMovies];
        });
      }
    }

    getData();
  }, []);

  useEffect(() => {
    async function getData() {
      const data = await fetchMovies(page);

      setMovies(prevMovies => {
        const uniqueMovies = data.results.filter(movie => !prevMovies.some(prevMovie => prevMovie.id === movie.id));
        return [...prevMovies, ...uniqueMovies];
      });
    }

    getData();
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 100) {
        setPage(prevPage => prevPage + 1);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className='max-w-[1400px] flex flex-wrap mx-auto justify-center'>
      {/* Render the movie results */}
      
      {movies.map(movie => (
        <Card data={movie} key={movie.id} />
      ))}

      {/* Render a dummy element to reference for infinite scrolling */}
      <div ref={loadMoreButtonRef} />

    </div>
  );
}
