
import React from 'react'
import getUser from '../utils/getUser'
import PageHead from '../components/pageHead'
import Hero from '../components/Hero/index'
import Summary from '../components/summary'
import WorkExperience from '../components/workExperience/index'
import Education from '../components/education/index'
import Footer from '../components/footer'
import Repos from '../components/repos/index'

const Index = ({ repos, user }) => {
    return (
        <div className='container mx-auto bg-network'>

                <PageHead />
                <Hero />
                <Summary />
                <WorkExperience />
                <Education />
                
                {/*
                <div>
                    <h3 className='text-4xl text-purple font-bold text-center uppercase mt-10 mb-5'>My Education</h3>
                    <div className='md:grid md:grid-cols-2 leading-none bg-white rounded-lg shadow-lg mx-8 md:mx-0 py-6 md:py-12 px-8 md:px-16'>
                        <div className='shadow-lg rounded-lg py-4 px-4'>
                            <h4 className='text-lg text-purple uppercase font-bold mb-2'>School</h4>
                            <h5 className='font-bold text-base normal-case uppercase text-pink-500'>Graduation degree complete</h5>
                            <h5 className='font-bold text-base normal-case uppercase'>Schools names Integração and Patriarca</h5>
                            <h4 className='font-bold'>Elementary and Secondary education</h4>
                            <h4 className='font-bold'>Brazil, Vinhedo-S.P.</h4>
                        </div>
                        <div className='shadow-lg rounded-lg py-4 px-4'>
                            <h4 className='text-lg text-purple uppercase font-bold mb-2'>College</h4>
                            <h5 className='font-bold text-base normal-case uppercase text-pink-500'>Graduation degree present</h5>
                            <h5 className='font-bold text-base normal-case uppercase'>Univerty name Anhanguera</h5>
                            <h4 className='font-bold'>Analyse system development</h4>
                            <h4 className='font-bold'>Brazil, Valinhos-S.P.</h4>
                        </div>
                    </div>
                </div>
                **/}

                {/*
                <div>
                    <h3 className='text-4xl text-purple font-bold text-center uppercase mt-10 mb-5'>My Education</h3>
                    <div className='grid grid-cols-2 leading-none bg-white rounded-lg shadow-lg py-6'>
                        {[1, 2].map(i => (
                        <div className='border-solid border-l-2  px-12'>
                            <h4 className='text-lg text-purple uppercase font-bold mb-2'>School</h4>
                            <p className='text-2xl uppercase'>
                            <span className='text-base'>Graduation degree complete</span><br/>
                            <span className='text-base normal-case'>Schools names Integração and Patriarca</span><br/>
                            <span className='text-lg normal-case font-bold'>Elementary and Secondary education</span><br/>
                            BRAZIL, VINHEDO - S.P.
                            </p>
                        </div>
                        ))}
                    </div>
                </div>
                **/}

                {/*<div className='text-right'>{props.currentDate}</div>**/}

                {/*<pre>{JSON.stringify(user, null, 2)}</pre>**/}

                <Repos user={user} repos={repos} />
                <Footer />  

        </div>
    )
}

export async function getServerSideProps(context){

    const { repos, user } = await getUser('renatodomingues')

    return {
        props: {
            currentDate: new Date().toString(),
            repos,
            user 
        }
    }
}

export default Index 
