import React from 'react'

export default function loading() {
  const loading = []
  for (let index = 0; index < 4; index++) {
    loading.push(
    <div className='flex flex-col gap-2'>
      <div className='w-[180px] h-[240px] bg-gray-600 rounded-md'></div>
      <div className='w-[180px] h-[12px] bg-gray-600 rounded-md'></div>
    </div>)
  }

  return (
    <div className='max-w-[1440px] mx-auto p-4 flex flex-wrap gap-4 animate-pulse'>
      {loading}
    </div>
  )
}
