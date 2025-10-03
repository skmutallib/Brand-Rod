import React from 'react'

const Navbar = () => {
  return (
    <nav className='border-1 border-zinc-100 z-50 text-white flex w-max justify-center items-center -translate-x-[50%] left-[50%] top-8 fixed rounded-full gap-6 backdrop-blur-3xl text-sm pr-2'>
        <a href="">
            <img src="/brandrod-logo.svg" alt="" className='w-40 h-15' />
        </a>
        <a href="">Services</a>
        <a href="">Testimonials</a>
        <a href="">Contact</a>
        <a href="" className='rounded-full text-[1rem] font-bold bg-white text-black px-4 py-3'>Book a Call</a>
    </nav>
  )
}



export default Navbar