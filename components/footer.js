
import React from 'react'
import { FaGithub } from 'react-icons/fa'

const footer = () => {

    return (
        <div>
            <p className='text-center text-white font-bold mx-4 md:mx-0 my-4 md:my-8 py-2 md:py-4 border-t-2 border-purple'>
                You can find the source-code of this website here: <br/>
                <span className='font-bold text-purple'> <a href='https://github.com/RenatoDomingues'> <FaGithub className='text-4xl md:text-6xl inline-block md:mr-6' /> </a> </span>
                <span className='font-bold text-purple'> <a href='https://vercel.com/dashboard/projects'> <img src='/images/vercel2.png' className='text-1xl inline-block md:mr-6'/> </a> </span>
            </p>
        </div>
    )
}
export default footer