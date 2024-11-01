import React from 'react'
import { family } from '../assets/data'

const Services = () => {
    return (
        <section className='bg-slate-100 py-12'>
            <div className="container">
                <div className='text-center space-y-3'>
                    <p className='text-xl text-blue font-semibold'>
                        Our Services
                    </p>
                    <h2>
                        Latest News
                    </h2>
                </div>
                <ul className='grid grid-cols-1 space-y-5 md:space-y-0 md:grid-cols-2 lg:grid-cols-3 gap-x-10 mt-16'>
                    {family.map((i, index) => {
                        return (
                            <li className='bg-white rounded-lg' key={index}>
                                <img className='mx-auto w-full' src={i.img} alt={i.title} />
                                <div className='p-3 space-y-3'>
                                    <p className='text-blue font-semibold'>{i.data}</p>
                                    <h3>{i.title}</h3>
                                    <p className='text-gray'>{i.description}</p>
                                    <button className='blue_btn'>
                                        Read More
                                    </button>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}

export default Services