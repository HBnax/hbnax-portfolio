import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-gradient-to-b
    from-black to-gray-800 px-4 py-20 text-white'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg
        mx-auto h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-red-500'>
                    Contact
                </p>
                <p className='text-xl py-6'>
                    Submit the form to get in touch with me!
                </p>
            </div>
            <div className='flex justify-center items-center'>
                <form action='https://getform.io/f/lbjkxkwa'method='POST' className='flex flex-col w-full md:w-1/2'>
                    <input
                        type='text'
                        name='name'
                        placeholder='Full Name'
                        className='p-2 bg-transparent border-2 rounded-md
                        text-white focus:outline-none'
                    />
                    <input
                        type='text'
                        name='email'
                        placeholder='Email'
                        className=' my-4 p-2 bg-transparent border-2 rounded-md
                        text-white focus:outline-none'
                    />
                    <textarea
                        name='message'
                        placeholder='Message'
                        rows='10'
                        className='p-2 bg-transparent border-2 rounded-md
                        text-white focus:outline-none'
                    />
                    <button className='text-white bg-red-500 cursor-pointer
                    hover:scale-110 duration-200 px-6 py-3 my-8 mx-auto flex
                    items-center rounded-md'>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact