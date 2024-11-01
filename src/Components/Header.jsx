import React from 'react'
import { Logo } from '../assets/data'

const Header = () => {
    return (
        <header className='bg-blue bg-cover bg-center bg-no-repeat'>
            <div className="container flex items-center justify-between py-3">
                <a href="#">
                    <img src={Logo} alt="Logotive" />
                </a>
                <nav>
                    <ul className='hidden md:flex space-x-8'>
                        <li><a className='text-white' href="#">Home</a></li>
                        <li><a className='text-white' href="#">About Us</a></li>
                        <li><a className='text-white' href="#">How it Works</a></li>
                        <li><a className='text-white' href="#">Our Services</a></li>
                        <li><a className='text-white' href="#">More</a></li>
                    </ul>
                </nav>
                <button className='bg-transparent border border-gray py-2 px-5 rounded-md text-white'>Contact Us</button>
            </div>
        </header>
    )
}

export default Header