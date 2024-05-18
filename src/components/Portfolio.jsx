import React from 'react'
import kardiokeeper from '../assets/projectImg/kardiokeeper.png'   
import pokefinder from '../assets/projectImg/pokefinder.png'   
import wordle from '../assets/projectImg/wordle.png'   
import oldPortfolio from '../assets/projectImg/oldPortfolio.png'  

const Portfolio = () => {

    const projects = [
        {
            id:1,
            src: kardiokeeper,
            name: 'KardioKeeper',
            demo: 'https://kardiokeeeper.netlify.app/',
            code: 'https://github.com/HBnax/KardioKeeper',
        },
        {
            id:2,
            src: pokefinder,
            name: 'PokéFinder',
            demo: 'https://pokefinder-nextjs.vercel.app/',
            code: 'https://github.com/HBnax/next_js_pokedex',
        },
        {
            id:3,
            src: wordle,
            name: 'Wordle Layout',
            demo: 'https://wordle-layout.vercel.app/',
            code: 'https://github.com/HBnax/WordleLayout',
        },
        {
            id:4,
            src: oldPortfolio,
            name: 'Old Portfolio',
            demo: '',
            code: '',
        },
    ]
  return (
    <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen py-20' >
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-red-500'>
                    Portfolio
                    
                </p>
                <p className='text-xl py-6'>
                    Check out some of my favorite projects!
                </p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 align-items-center'>
                {
                    projects.map((project) => (
                            <div key={project.id} className='shadow-lg shadow-gray-500 rounded-lg'>
                                <h1 className='text-md font-bold text-center p-3'>{project.name}</h1>
                                <img src={project.src} alt='' className='rounded-md w-full h-40' />
                                <div className='flex items-center justify-center'>
                                    <button className='w-1/2 px-6 py-1/2 m-4 duration-200 hover:scale-105'>
                                        <a href={project.demo}>
                                            Demo
                                        </a>
                                    </button>
                                    <button className='w-1/2 px-6 py-1/2 m-4 duration-200 hover:scale-105'>
                                    <a href={project.code}>
                                            Code
                                        </a>
                                    </button>
                                </div>
                            </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Portfolio