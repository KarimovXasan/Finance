import React from 'react'

const Firm = () => {
    return (
        <section>
            <div className="container py-28">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
                    <div>
                        <h3 className='text-blue'>Our Firm</h3>
                        <br />
                        <h2>We are Agile. Constantly
                            Focused on Growth and
                            Being Better
                        </h2>
                        <br />
                        <div className='text-gray'>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
                            <br />
                            <p>
                                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics
                            </p>
                        </div>
                        <br />
                        <button className='bg-blue text-white py-2 px-5 rounded'>Read About Us</button>
                    </div>
                    <div className='grid grid-cols-2'>
                        <div className='bg-bgColor text-blue gap-7 rounded-2xl text-center m-4 py-14'><h3>18</h3><p>Years Experience</p></div>
                        <div className='bg-bgColor text-blue gap-7 rounded-2xl text-center m-4 py-14'><h3>240+</h3><p>Completed Projects</p></div>
                        <div className='bg-bgColor text-blue gap-7 rounded-2xl text-center m-4 py-14'><h3>9.5/10</h3><p>Average rating</p></div>
                        <div className='bg-bgColor text-blue gap-7 rounded-2xl text-center m-4 py-14'><h3>150+</h3><p>Served</p></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Firm