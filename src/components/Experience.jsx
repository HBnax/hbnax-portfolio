import React from 'react'
import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import reactImage from '../assets/react.png';
import nextjs from '../assets/nextjs.png';
import github from '../assets/github.png';
import cpp from '../assets/cpp.png';
import csharp from '../assets/csharp.png';
import java from '../assets/java.png';
import python from '../assets/python.png';
import unity from '../assets/unity.png';
const experience = () => {

    const elements = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-400'
        },
        {
            id: 3,
            src: javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: reactImage,
            title: 'React',
            style: 'shadow-cyan-500'
        },
        {
            id: 5,
            src: nextjs,
            title: 'Next.js',
            style: 'shadow-white'
        },
        {
            id: 6,
            src: github,
            title: 'GitHub',
            style: 'shadow-gray-500'
        },

    ]
    return (
        <div name='experience' className='bg-gradient-to-b from-gray-800 to-black w-full h-screen py-20'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-red-500'>
                        Experience
                    </p>
                    <p className='text-xl py-6'>
                        These are the technologies I've worked with
                    </p>
                </div>
    
                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                    {elements.map((element) => {
                        return (
                            <div
                                key={element.id}
                                className={`shadow-md rounded-lg py-2 
                                ${element.style}`}>
                                <img src={element.src} alt="" className='w-20 mx-auto'/>
                                <p className='mt-4'>
                                    {element.title}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
      )
}

export default experience