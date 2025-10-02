import React from 'react'

const HeroSection = ({headLine, subHeadLine, ctaText}) => {
 

  return (
    /* <div className='relative bg-black flex flex-col items-center h-screen'>
        <h1 className='absolute text-6xl font-extrabold text-center top-10% text-white w-[60%]'>{headLine}</h1>
        <h2>{subHeadLine}</h2>
    </div> */
    <section className='bg-black'>
        <div className='h-screen mx-auto max-w-screen-xl flex flex-col items-center justify-center text-center py-8 px-4 lg:py-16 lg:px-12'>
            <a href="#" className=''></a>
            <h1 className='w-[70%] text-4xl font-extrabold  text-white md:text-5xl lg:text-6xl'>We help remarkable Business growth online</h1>
            <p className='text-lg mt-6 font-normal text-gray-500 lg:text-lg sm:px-16 xl:px-48'>At Brandrod, we harness creativity, data, and technology to help businesses grow their digital presence, unlock new opportunities, and achieve lasting impact online.</p>
            <div>
                <button className='text-white px-6 py-2 text-xl rounded-full bg-[#53469e] mt-5 shadow-inner shadow-white/50 '>Book a call</button>
            </div>
        </div>
    </section>
  )
}

export default HeroSection