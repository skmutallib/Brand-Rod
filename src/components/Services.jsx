import React from 'react'

import { Card, CardContent, CardHeader } from './ui/card'
const Services = () => {
    const services = [
        {
            headline: "Creative & Branding",
            description: "From eye-catching graphic design and brand storytelling videos to professional photography and user-friendly web design, we craft creative solutions that make your brand stand out and connect with your audience.",
            icon: "fa fa-paint-brush"
        },
        {
            headline: "Growth Engine",
            description: "From SEO and paid ads to social media, content creation, and email marketing, we deliver integrated strategies that attract, engage, and convert your audience into loyal customers.",
            icon: "fa fa-search"
        },
        {
            headline: "Digital Foundations",
            description: "We build fast, secure, and responsive websites, optimize e-commerce platforms, and improve conversion rates with smart strategies backed by detailed analytics — helping your business scale with confidence.",
            icon: "fa fa-code"
        },
        {
            headline: "Advanced & Premium",
            description: "From influencer collaborations and marketing automation to brand strategy and online reputation management, we provide advanced solutions that take your business to the next level and build lasting trust.",
            icon: "fa fa-magic"
        }
    ]
    return (
        <div className='bg-black h-fit text-white text-center items-center font-display justify-center flex flex-col py-25'>
            <h2 className='text-gray-400 text-xl mt-10'>Build online</h2>
            <h1 className='text-5xl leading-[3.5rem] w-150 font-bold'>Everything you need to build online presence</h1>
            <div className='grid grid-cols-2 mt-20 px-30'>
                {services.map((service, index) => (
                    <Card key={index} className="bg-transparent border-zinc-800 text-left m-4 p-6">
                        <CardHeader className="p-0">
                            <div className="relative pl-24">
                                <i className={`absolute left-0 top-0 ${service.icon} bg-white p-4 rounded-lg text-black text-4xl`} aria-hidden="true"></i>
                                <h3 className="text-2xl font-semibold text-white mt-4">{service.headline}</h3>
                            </div>
                        </CardHeader>
                        <CardContent className="p-0 mt-4">
                            <p className="text-zinc-400">{service.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}


export default Services