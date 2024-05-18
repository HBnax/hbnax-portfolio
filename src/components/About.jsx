import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full py-10 bg-gradient-to-b from-gray-800 to-black text-white' >
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-red-500'>
                    About
                </p>
            </div>

            <p className='text-xl mt-10'>
                Welcome! I'm Halle Broadnax, a passionate and dedicated Software Engineering
                student based in Santa Ana, CA. I am currently pursuing a B.S. in Software Engineering with
                a minor in Game Development Programming at Chapman University. I am deeply committed to
                crafting innovative solutions that blend technical prowess with creativity.
            </p>

            <br />
            <p className='text-xl my-10'>
                On campus, I'm involved in a number of organizations, such as Chapman's Computer Science Club,
                Out in STEM, Society of Women Engineers, and Girls Who Code. I've also been honored with Chapman's Presidential Scholarship 
                for the entirety of my undergraduate career and consistently recognized on the Provost List for my academic excellence.
            </p>

            <p className='text-xl mt-5 mb-10'>
                Throughout my academic journey, I've developed a strong foundation in Mathematics (Calculus I, II, III,
                Linear Algebra, and Discrete Mathematics), Computer Science (Object-oriented Programming, Data Structures 
                & Algorithms, Web Engineering, Human-Computer Interaction), and Game Development (Unity, Unreal Engine)
            </p>
        </div>
    </div>
  )
}

export default About