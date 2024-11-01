import React from 'react'
import { FcIcon, InsIcon, LogoIcon, TwIcon } from '../assets/data'

const Footer = () => {
    return (
        <section>
            <div className="container text-sm py-12">
                <div className='grid grid-cols-3'>
                    <div className='space-y-6'>
                        <img src={LogoIcon} alt="logo" />
                        <p className='text-gray'>
                            WeFinance is the highest rated expert <br /> team in the world
                        </p>
                    </div>
                    <ul className='grid grid-cols-3'>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Our Services</a>
                        </li>
                        <li>
                            <a href="#">Our Team</a>
                        </li>
                        <li>
                            <a href="#">About Us</a>
                        </li>
                        <li>
                            <a href="#">Contact Us</a>
                        </li>
                        <li>
                            <a href="#">Careers</a>
                        </li>
                        <li>
                            <a href="#">How it Works</a>
                        </li>
                        <li>
                            <a href="#">FAQ</a>
                        </li>
                    </ul>
                    <ul className='flex space-x-3  justify-end '>
                        <li>
                            <img src={FcIcon} alt="facebook" />
                        </li>
                        <li>
                            <img src={InsIcon} alt="instagram" />
                        </li>
                        <li>
                            <img className='rounded-md' src={TwIcon} alt="twiter" />
                        </li>
                    </ul>
                </div>
                    <div className='text-gray flex justify-between mt-10'>
                        <p>
                            ©2021 WeFinance
                        </p>
                        <ul className='flex space-x-5'>
                            <li><a href="#">Help</a></li>
                            <li><a href="#">Term & Conditions</a></li>
                            <li><a href="#">Privacy</a></li>
                        </ul>
                    </div>
            </div>
        </section>
    )
}

export default Footer