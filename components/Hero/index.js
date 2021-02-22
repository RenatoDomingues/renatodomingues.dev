import React from 'react'
import ContactMe from './contactMe'
//import { IconName } from 'react-icons/io' 
//import { IoLogoVercel } from 'react-icons/io'


const Hero = () => {
    return (
            <div className='md:grid md:grid-cols-2 md:pt-16 leading-none'>
                        <div className='pt-16 md:pt-32'>
                            <h1 className='text-purple md:text-black text-4xl uppercase pl-16'>Hi, I'm Renato Domingues</h1>
                            <h2 className='text-purple md:text-black text-4xl font-bold md:text-5xl uppercase pl-16 pb-2'>My repositories on GitHub</h2>

                            <ContactMe />
                            
                        </div>
                        <div className='px-8'> 
                            <img src='/images/backgroundCurriculum3.png' /> 
                        </div>
                        
            </div>
    )
}
export default Hero