
import React from 'react'

const educationItem = ( {degree} )  => {

    return (
        <div className='px-12'>
            <h4 className='text-lg text-purple uppercase font-bold mb-2'>{degree.degree}</h4>
            <p className='text-2xl uppercase'>
            <span className='text-base'>{degree.subject}</span><br/>
            <span className='text-base normal-case'>{degree.institucion}</span><br/>
            <span className='text-lg normal-case font-bold'>{degree.informationInstitucion}</span><br/>
            {degree.addressInstitucion}
            </p>
        </div>
    )
}
export default educationItem