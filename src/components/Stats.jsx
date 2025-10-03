import React from 'react'

const Stats = () => {
  return (
    <div className='text-white flex flex-col items-center font-display leading-10 text-center h-fit bg-black'>
        <h1 className='text-5xl font-bold'>Brandrod in Numbers</h1>
        <p className='text-lg mt-3'>Driving results that speak for themselves.</p>
      <dl className='grid grid-cols-3 gap-x-30 items-center text-center mt-20' >
        <div className='flex-col'>
          <dt className='text-7xl font-semibold'>20+</dt>
          <dd className='text-xl mt-3'>Client onboarded</dd>
        </div>
        <div className='flex-col'>
          <dt className='text-7xl font-semibold'>100K+</dt>
          <dd className='text-xl mt-3'>Followers gained</dd>
        </div>
        <div className='flex-col '>
          <dt className='text-7xl font-semibold'>500K+</dt>
          <dd className='text-xl mt-3'>funds campaign</dd>
        </div>
      </dl>
    </div>
  )
}

export default Stats