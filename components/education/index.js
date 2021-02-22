
import React from 'react'
import EducationItem from './educationItem'

const degrees = [
    {
        degree: 'School',
        subject: 'Graduation degree complete',
        institucion: 'Schools Integração and Patriarca',
        informationInstitucion: 'Elementary and Secondary education',
        addressInstitucion: 'BRAZIL, VINHEDO - S.P.'
    },
    {
        degree: 'COLLEGE',
        subject: 'Graduation degree present',
        institucion: 'Univerty Anhanguera',
        informationInstitucion: 'Analyse System Development',
        addressInstitucion: 'BRAZIL, VALINHOS - S.P.'
    }
]

const education = () => {
    return (
        <div>
            <h3 className='text-4xl text-purple font-bold text-center uppercase mt-10 mb-5'>My Education</h3>
            <div className='grid grid-cols-2 bg-white rounded-lg shadow-lg py-6'>
                {degrees.map((degree, i) => (
                    
                    <EducationItem key={'i' + i} degree={degree} />
                    
                    
                ))}
            </div>
        </div>

    )
}
export default education