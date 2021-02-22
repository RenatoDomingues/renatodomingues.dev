
import React from 'react'
import Repo from '../repos/repo'
import UserStats from '../repos/userStats'

const repos = ( { user, repos } ) => {
    return (
        <div>
            <h3 className='text-4xl text-purple font-bold text-center uppercase mx-1 md:mx-0 mt-5 md:mt-10 mb-3 md:mb-6'>Tech contributions</h3>
            
            <UserStats user={user} />
            
            <div className='md:grid md:grid-cols-3 md:gap-2 my-3 md:my-6'>
                {repos.map(repo => {
                    return (

                        <Repo key={repo.id} repo={repo} />

                    )
                })}
            </div>
        </div>
    )
}
export default repos 