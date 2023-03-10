import Card from '@/components/Card'
import React from 'react'

async function getPerson(params){
    const res = await fetch(`https://api.themoviedb.org/3/person/${params}/movie_credits?api_key=b9e4f85c3b6987a76b17bb7579bc1ac8`)
    const data = await res.json()
    return data
}

async function getPersonInfo(params){
    const res = await fetch(`https://api.themoviedb.org/3/person/${params}?api_key=b9e4f85c3b6987a76b17bb7579bc1ac8`)
    const data = await res.json()
    return data
}

async function getPersonTV(params){
    const res = await fetch(`https://api.themoviedb.org/3/person/${params}/tv_credits?api_key=b9e4f85c3b6987a76b17bb7579bc1ac8`)
    const data = await res.json()
    return data
}

export default async function page({params}) {
   const person = await getPerson(params.id)
   const personInfo = await getPersonInfo(params.id)
   const personTV = await getPersonTV(params.id)

   const movies = [...person.cast, ...person.crew]
   const tvShows = [...personTV.cast, ...personTV.crew]
   const media = [...movies, ...tvShows].reduce((acc, curr) => {
      if (!acc.find(item => item.id === curr.id)) {
         acc.push(curr);
      }
      return acc;
   }, []);

   media.sort((a, b) => (b.popularity || 0) - (a.popularity || 0));
   
   return (
      <div className="max-w-[1400px] mx-auto p-4 my-4 flex flex-col gap-4">
         <div className=' bg-zinc-800 h-fit p-4 rounded-md sm:flex sm:gap-4'>
            <img className='max-h-[300px] mx-auto object-cover rounded-md' src={`https://image.tmdb.org/t/p/original${personInfo.profile_path}`} />
            <div>
               <h2 className='text-3xl mt-4'>{personInfo.name}</h2>
               <p className="text-gray-500 my-2 text-lg line-clamp-3 md:line-clamp-none">{personInfo.biography.split('.').slice(0,2).join('.')}.</p>
               <p className="text-gray-500 my-2 text-lg">Born: {personInfo.birthday}</p>
               {personInfo.deathday ? (
                     <p className="text-gray-500 my-2 text-lg">Died: {personInfo.deathday}</p>
                  ) : null
               }
            </div>
         </div>
         
         <div className=''>
            <h2 className='text-2xl'>Movies and TV Shows:</h2>
            <div className='flex flex-wrap mx-auto justify-center'>
               {media.map(mediaItem => (
                  <Card data={mediaItem} key={mediaItem.id}/>
               ))}
            </div>
         </div>  
      </div>
   )
}
