import Image from 'next/image'
import { Inter } from 'next/font/google'
import MovieBar from '@/components/MovieBar'
const API_KEY = process.env.API_KEY

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
  const res = await fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`)
  const data = await res.json()

  return (
    <div>
      <img className='absolute top-0 left-0  md:max-h-[500px] max-h-[300px] w-full object-cover' src={`https://image.tmdb.org/t/p/original${data.results[0].backdrop_path}`} />
      <div className='absolute top-0 left-0  w-full md:h-[500px] h-[300px] bg-gradient-to-t from-zinc-900 to-transparent'></div>
      <div className='relative max-w-[1400px] mx-auto p-4'>
        <div className='mx-auto max-w-[1440px] p-4 my-4'>
          <h2 className='text-2xl'>
            {data.results[0].name || data.results[0].title}
          </h2>
          <p className='my-4 line-clamp-3'>
          {data.results[0].overview}
          </p>
          <button className='bg-red-600 px-4 py-2 rounded-md'>Watch now</button>
          </div>
          {/* <MovieBar title='Trending' genre='trending/all/week' />
          <MovieBar title='Popular' genre='movie/popular' />
          <MovieBar title='TV Shows' genre='tv/popular' />
          <MovieBar title='Top Rated TV SHows' genre='tv/top_rated' />
          <MovieBar title='Top Rated' genre='movie/top_rated' />
          <MovieBar title='Upcoming' genre='movie/upcoming' /> */}
      </div>
    </div>
  )
}
