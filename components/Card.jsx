import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import defaultImage from '../public/logo.png';

export default function Card(props) {
  // console.log(props.data)
  const altValue = props.data.name || props.data.title;
  return (
    <div>
      <Link href={props.data.profile_path ? `/person/${props.data.id}` : props.data.name ? `/tv/${props.data.id}` : `/movie/${props.data.id}`}>
        <div className='w-[200px] h-full flex-nowrap p-4 group rounded-md hover:bg-neutral-700'>
          <Image loading='lazy' alt={altValue} width={180} height={240} className='rounded-md' src={`https://image.tmdb.org/t/p/original${props.data.poster_path || props.data.profile_path}` }></Image>
          <h3 className='line-clamp-1 w-full'>{props.data.name || props.data.title}</h3>
        </div>
      </Link>
    </div>
  )
}
