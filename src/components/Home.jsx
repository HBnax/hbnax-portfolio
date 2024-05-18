import React from 'react';
import HeroImage from '../assets/heroImage.png';
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='w-full bg-gradient-to-b from-black via-black to-gray-800'>
        <div className='h-screen max-w-screen-lg mx-auto flex flex-col items-center justify-center px-4 md:flex-row '>
            <div className='flex flex-col justify-center'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                    Hey! I'm Halle Broadnax
                </h2>
                <p className='text-gray-400 py-4 max-w-md'> 
                    I am currently seeking internship opportunities in Software Engineering or  Game Development.
                    I am eager to learn about these industries and grow in a professional environment and am excited to contribute to
                    a team that values innovation and collaboration.
                </p>
                <div>
                    <Link to="portfolio" 
                    smooth
                    duration={500}
                    className='text-white font-bold w-fit px-7 py-3 my-2 flex items-center
                    rounded-md bg-red-500 cursor-pointer
                    hover:scale-110 duration-200'>
                        Portfolio 
                        <span className='pl-3'>
                            <FaArrowRightLong />
                        </span>
                    </Link>
                </div>
            </div>
            <div>
                <img src={HeroImage} alt='my profile pic' className='rounded-2xl mx-auto w-2/3 md:full' />
            </div>
        </div>
    </div>
  )
}

export default Home