import React from 'react'
import { cards } from '../assets/data'

const Servies = () => {
    return (
        <section>
            <div className="container">
                <div className='text-center space-y-3'>
                    <h3 className='text-blue'>Our Services</h3>
                    <h2>What We Offer</h2>
                </div>
                <br />
                {/* cards */}
                <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 py-8'>
                    {cards.map((i, index)=>{
                        return(
                            <li key={index} className='text-center space-y-4 bg-blue py-6 px-2 rounded-lg text-white'>
                                <img className='mx-auto' src={i.img} alt={i.title} />
                                <h3>{i.title}</h3>
                                <p>{i.description}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}

export default Servies