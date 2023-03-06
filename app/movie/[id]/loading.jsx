import React from 'react'

export default function loading() {
  const loading = []
  for (let index = 0; index < 1; index++) {
    loading.push(
    <div className='flex md:flex-row flex-col gap-4'>
      <div className='w-[70%] h-[400px] self-center md:w-[260px] bg-gray-600 rounded-md'></div>
      <div className='flex flex-col gap-4'>
        <div className='w-[180px] h-[20px] bg-gray-600 rounded-md'></div>
        <div className='w-[400px] h-[12px] bg-gray-600 rounded-md'></div>
        <div className='w-[400px] h-[12px] bg-gray-600 rounded-md'></div>
        <div className='w-[100px] h-[12px] bg-gray-600 rounded-md'></div>
        <div className='w-[100px] h-[12px] bg-gray-600 rounded-md'></div>
        <div className='w-[240px] h-[12px] bg-gray-600 rounded-md'></div>
        <div className='w-[240px] h-[12px] bg-gray-600 rounded-md'></div>
        <div className='flex gap-4 items-center'>
          <div className='w-[140px] h-[40px] bg-gray-600 rounded-md'></div>
          <div className='w-[140px] h-[12px] bg-gray-600 rounded-md'></div>
        </div>
      </div>
    </div>)
  }
  return (
    <div className='max-w-[1440px] mx-auto p-4 flex flex-wrap gap-4 animate-pulse'>
      {loading}
    </div>
  )
}
