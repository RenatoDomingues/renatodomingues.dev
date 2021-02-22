
import React from 'react'
import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa'
import { HiOutlineMailOpen } from 'react-icons/hi'

const contactMe = () => {
    return (
        <div className='mx-8 px-8 relative border-purple border-2 rounded md:mx-0 md:px-16 pb-4 pt-10 mt-6'>
            <h3 className='absolute bg-purple text-white py-2 px-6 top-0 -mt-8 text-2xl font-bold uppercase'>Contact me</h3>
            <ul className='text-center md:text-left'>
                <li>
                    <FaLinkedin className='text-4xl md:text-6xl inline-block md:mr-6' />
                    <FaGithub className='text-4xl md:text-6xl inline-block md:mr-6' />
                    <FaFacebook className='text-4xl md:text-6xl inline-block md:mr-6' />
                    <img src='/images/vercel2.png' className='text-1xl inline-block md:mr-6'/>
                    <HiOutlineMailOpen className=' '/> <span className='font-bold text-left inline-block'>or drop a email: kungfurenato30@gmail.com</span>
                </li>
            </ul>
        </div>
    )
}
export default contactMe