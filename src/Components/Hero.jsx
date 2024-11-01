import React from 'react'
import { People } from '../assets/data'

const Hero = () => {
    return (
        <section className='bg-blue bg-cover bg-center bg-no-repeat'>
            <div className="container">
                <div className="grid grid-cols-2 gap-5 items-center justify-between">
                    <div className='space-y-3 py-10 text-white mx-auto text-center md:text-start'>
                        <h1 className='text-5xl md:text-8xl font-bold'>Financial Solutions.</h1>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
                        <button className='btn-hero'>
                            Let’s Talk
                        </button>
                    </div>
                    <div className='mx-auto'>
                        <img className='hidden md:block' src={People} alt="People right" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero