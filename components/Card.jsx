import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Card(props) {
  console.log(props.data)
  return (
    <div>
      <Link href={props.data.name ? `/tv/${props.data.id}` : `/movie/${props.data.id}`}>
        <div className='w-[200px] h-full flex-nowrap p-4 group rounded-md hover:bg-neutral-700'>
          <Image alt='no image' width={200} height={112} className='rounded-md'  src={`https://image.tmdb.org/t/p/original${props.data.backdrop_path}`}></Image>
          <h3 className='line-clamp-1 w-full'>{props.data.name || props.data.title}</h3>
        </div>
      </Link>
    </div>
  )
}
